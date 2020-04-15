// vue.config.js
// import webpackPlugin from './plugin.config';
const path = require("path");

// eslint-disable-next-line
const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  // 选项...

  css: {
    requireModuleExtension: true,
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        modifyVars: {
          "primary-color": "#1DA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    // proxy:'http://127.0.0.1:6868/ems-manage-web/',
    proxy: {
      "/api": {
        target: "https://proapi.azurewebsites.net",
        ws: true, //如果要代理 websockets
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api/": "/api/"
        }
      }
    }
  }
};
