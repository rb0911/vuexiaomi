module.exports= {
    devServer: {
        host: 'localhost',
        port: 8000,
        Proxy: {
            '/api': {
                target: 'https://www.imooc.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api':''
                }
            }
        }
    }
}