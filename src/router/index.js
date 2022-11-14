/*
 * @Autor: zhiying Qin
 * @Date: 2022-10-31 20:18:13
 * @LastEditTime: 2022-11-12 22:10:46
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { check, isLogin } from "@/utils/auth";
import NotFound from "../views/404.vue";
import NotPermission from "../views/403.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    hideInMenu: true,
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () => import(/* webpackChunkName: "user" */ "../views/User/Login"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () => import(/* webpackChunkName: "user" */ "../views/User/Register"),
      },
    ],
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "dashboard" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis",
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { icon: "dashboard", title: "仪表盘", auth: ["admin", "user"] },
        component: { render: (h) => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta: { title: "分析页 " },
            component: () => import(/* webpackChunkName: "analysis" */ "../views/Dashboard/Analysis.vue"),
          },
        ],
      },
      {
        path: "/form",
        name: "form",
        component: { render: (h) => h("router-view") },
        meta: { icon: "form", title: "表单", auth: ["admin"] },
        children: [
          {
            path: "/form/basic-form",
            name: "basic-form",
            meta: { title: "基础表单" },
            component: () => import(/* webpackChunkName: "basicForm" */ "../views/Forms/BasicForm.vue"),
          },
          {
            path: "/form/step-form",
            name: "step-form",
            component: () => import(/* webpackChunkName: "step-form" */ "../views/Forms/StepForm/index.vue"),
            hideChildrenInMenu: true,
            meta: { title: "分布表单", auth: ["user", "admin"] },
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info",
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () => import(/* webpackChunkName: "info" */ "../views/Forms/StepForm/Step1.vue"),
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () => import(/* webpackChunkName: "confirm" */ "../views/Forms/StepForm/Step2.vue"),
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () => import(/* webpackChunkName: "result" */ "../views/Forms/StepForm/Step3.vue"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/403",
    hideInMenu: true,
    name: "403",
    component: NotPermission,
  },
  {
    path: "*",
    hideInMenu: true,
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const record = to.matched.find((item) => item.meta.auth);

  if (to.path != "/user/login" && !isLogin()) {
    next({ path: "/user/login" });
    return;
  }

  console.log(to);

  if (record && !check(record.meta.auth)) {
    next({ path: "/403" });
    return;
  }
  next();
});

export default router;
