const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    resolve:{
        extensions:['.ts','.js','.json','.css']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:['ts-loader','angular2-template-loader']
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        // options:['env','stage-2']
                    }
                ],
                exclude:/node_modules/,
                include:/src/
            },
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.html$/,
                use:'html-withimg-loader'
            },
            {
                test:/\.(png|gif|jpe?g|svg|woff|woff2|ttf|eot|ico|swf)$/,
                loader:'url-loader',
                options:{
                    limit:5,
                    name:'images/[name].[ext]'
                }
            }
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/node_modules/,
                    chunks:'initial',
                    name:'vendor',
                    enforce:true
                }
            }    
        }      
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].[chunkhash:5].css'
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true
            },
            chunks:['vendor','main']
        })
    ]
}