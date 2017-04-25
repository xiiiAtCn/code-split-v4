/**
 * Created by xiii_ on 2017/4/25.
 */
let config = require('./common')

module.exports = (function (config) {
    config.devtool = '#source-map'
    config.devServer = {
        port: 9000,
        compress:true,
        historyApiFallback:true,
        inline:true,
        noInfo:true
    }
    return config
}(config))