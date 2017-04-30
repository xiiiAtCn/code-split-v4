/**
 * Created by xiii_ on 2017/4/25.
 */
let config = require('./common')

module.exports = function (config) {
    config.devtool = '#source-map'
    config.devServer = {
        contentBase: 'http://localhost:9000',
        publicPath: '/dist/',
        port: 9000,
        compress:true,
        historyApiFallback:true,
        hot:true
    }
    return config
}(config)