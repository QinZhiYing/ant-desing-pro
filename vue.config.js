/*
 * @Autor: zhiying Qin
 * @Date: 2022-10-31 20:18:13
 * @LastEditTime: 2022-11-14 09:40:50
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const AntDesignThemePlugin = require("./antd-theme-webpack-plugin");

const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"),
  stylesDir: path.join(__dirname, "./src"),
  varFile: path.join(__dirname, "./node_modules/ant-design-vue/lib/style/themes/default.less"),
  // varFile: path.join(__dirname, "./src/components/var.less"),
  themeVariables: ["@primary-color"],
  // indexFileName: "index.html",
  // mainLessFile: "",
  // lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
  // publicPath: "",
  // customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
};

// const themePlugin = new AntDesignThemePlugin(options);

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: {
          //   "primary-color": "#1DA57A",
          // },
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        bypass: async (req, res) => {
          if (req.headers.accept.indexOf("html") !== -1) {
            return "/index.html";
          } else {
            // console.log(process.env, "------------");
            if (process.env.MOCK) {
              let name = req.path.split("/api/")[1].split("/").join("_");
              let mock = require(`./mock/${name}`);
              const result = mock(req.method);
              delete require.cache[require.resolve(`./mock/${name}`)];

              let value = new Promise((resolve) => {
                setTimeout(() => {
                  return resolve(result);
                }, 3000);
              });

              let result1 = await value;
              return res.send(result1);
            }
          }
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("themePlugin").use(AntDesignThemePlugin, [options]);
  },
  // configureWebpack: {
  //   plugins: [themePlugin],
  // },
});
