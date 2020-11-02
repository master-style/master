const
    common = require('./webpack.common.js'),
    /** Prod Quick Config =============================================== */
    config = common.config({
        hash: false
    })
    /* ================================================================= **/;

const
    { CleanWebpackPlugin } = require('clean-webpack-plugin')

/* Getting github or gitlab project name to set base href */
// config.template.base = `/${require('git-repo-name').sync()}/`;

module.exports = common.merge({
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
}, config);