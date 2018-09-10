const path = require('path');
const merge = require('webpack-merge');
const baseConfig =  require('./webpack.base.config');

module.exports = merge(baseConfig,{
    devServer:{
        contentBase:path.resolve(__dirname,'src'),
        host:'192.168.66.28',
        port:9494,
        open:true,
        hot:true,
        proxy:{
            '/':{
                target:'http://127.0.0.1:19000',
                changeOrigin: true
            }
        }
    }
});