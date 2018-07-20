const path = require('path');
const merge = require('webpack-merge');
const UglifyjsWebpackPlugin= require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');
const baseConfig =  require('./webpack.base.config');
module.exports = merge(baseConfig,{
    plugins:[
        new UglifyjsWebpackPlugin(),
        new CleanWebpackPlugin(['dist'])
    ]
});