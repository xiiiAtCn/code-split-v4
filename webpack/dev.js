/**
 * Created by xiii_ on 2017/4/25.
 */
let config = require('./common')
const path = require('path')

module.exports = function (config) {
    config.devtool = '#source-map'
    config.devServer = {
        contentBase: path.resolve(__dirname, '../static'),
        publicPath: '/dist/',
        port: 9000,
        compress:true,
        historyApiFallback:true,
        hot:true
    }
    return config
}(config)