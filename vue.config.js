//关闭错误提示
var px2rem = require('postcss-px2rem');

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
               plugins:[px2rem({remUnit: 37.5})] //以设计稿为标准计算出来的根字体大小
            }
          }  
    },

    devServer: { // 只用于开发环境
        proxy: {
       '/api':    { // 只对请求路由以/api开头的请求进行代理转发
            // target: 'http://39.99.186.36', // 转发的目标url
            target: 'https://m.you.163.com', // 转发的目标url
            changeOrigin: true, // 支持跨域
            pathRewrite: {'^/api': ''}  // 后台接口都有/api
          }
        }
    },
  
}