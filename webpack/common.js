/**
 * Created by xiii_ on 2017/4/25.
 */

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const context = path.resolve(__dirname, '../')

module.exports = {
    context:context,
    entry:'./entry.js',
    output:{
        filename:'[name][hash:10].js',
        path:path.resolve(context, 'dist'),
        publicPath:'/dist/',
        chunkFilename:'[name][hash:5].js',
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: path.resolve(context, 'dist')
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(context, 'src'),
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['env', 'react', 'stage-0'],
                        plugins:[
                            ['import', {libraryName: 'antd', style: 'css'}]
                        ]
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    resolve:{
        alias:{},
        modules: [
            path.join(__dirname, 'src'),'node_modules'
        ]
    },
    externals:{
        jquery : 'jQuery'
    },
    plugins:[
        new ExtractTextPlugin('main.css'),
        new HtmlWebpackPlugin({
            template:path.resolve(context, 'src/templates/index.html')
        }),
    ]
}