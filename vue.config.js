/*
 * @Autor: zhiying Qin
 * @Date: 2022-10-31 20:18:13
 * @LastEditTime: 2022-11-08 21:11:57
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
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
});
