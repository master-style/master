const
    common = require('../../../compiler/webpack.common.js'),
    /** Prod Quick Config =============================================== */
    config = common.config({
        hash: false
    })
    /* ================================================================= **/;

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Path = require('path');
const glob = require('globby');
/* Getting github or gitlab project name to set base href */
// config.template.base = `/${require('git-repo-name').sync()}/`;

const entryGlob = [
    Path.join(__dirname, './**/*/index.{ts,js}'),
    Path.join(__dirname, './**/*/index.{scss,css}'),
    Path.join(__dirname, '!./node_modules/**/*')
];

console.log(__dirname);

module.exports = common.merge({
    entry: () => new Promise((resolve) => resolve(glob.sync(entryGlob).reduce((entrypoint, path) => {
        const parsePath = Path.parse(Path.relative(__dirname, path));
        entrypoint[Path.join(__dirname, 'dist', parsePath.dir, parsePath.name)] = path;
        return entrypoint;
    }, {}))),
    context: __dirname,
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
}, config);