const
    common = require('../../../webpack/webpack.common.js'),
    /** Prod Quick Config =============================================== */
    config = common.config()
    /* ================================================================= **/;

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const renameIndexWithDirname = (pathStr) => {
    const parsePath = Path.parse(Path.relative('src', pathStr));
    if (parsePath.dir !== '' && parsePath.name === 'index') {
        return parsePath.dir + parsePath.ext;
    } else {
        return pathStr.split('src/')[1]
    }
};

/* Getting github or gitlab project name to set base href */
// config.template.base = `/${require('git-repo-name').sync()}/`;

module.exports = common.merge({
    entry: glob.sync([
        './**/index.{ts,js}',
    ]).reduce((entry, path) => {
        const parsePath = Path.parse(renameIndexWithDirname(path));
        entry[Path.join(parsePath.dir, parsePath.name)] = path
        return entry;
    }, {}),
    mode: 'production',
    output: {
        crossOriginLoading: 'anonymous'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}, config);