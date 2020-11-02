const
    common = require('./webpack.common.js'),
    /** Dev Quick Config ================================================= */
    config = common.config()
    /* ================================================================= **/;

module.exports = common.merge({
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: '/'
    },
    devServer: {
        hot: !config.extractCss,
        watchContentBase: true,
        contentBase: [
            './src/**/*.html'
        ]
    }
}, config);
