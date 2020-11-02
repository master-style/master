const
    common = require('./webpack.common.js'),
    /** Prod Quick Config =============================================== */
    config = common.config({
        hash: false,
        extractCss: false,
        // https://github.com/jantimon/html-webpack-plugin#options
        template: {}
    })
    /* ================================================================= **/;

const
    { CleanWebpackPlugin } = require('clean-webpack-plugin')

/* Getting github or gitlab project name to set base href */
// config.template.base = `/${require('git-repo-name').sync()}/`;

module.exports = common.merge({
    mode: 'production',
    output: {
        crossOriginLoading: 'anonymous'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}, config);