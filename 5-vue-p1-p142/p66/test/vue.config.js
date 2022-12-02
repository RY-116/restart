module.exports = {
  devServer: {
    port: 8000, // 可以自己修改端口号
    proxy: {
      '/mmdb': {
        target: 'https://i.maoyan.com/api',
        changeOrigin: true
      }
    }

  }
}
