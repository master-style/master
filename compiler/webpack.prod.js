const Path = require('path');
const glob = require('globby');

const
    common = require('./webpack.common.js'),
    /** Prod Quick Config =============================================== */
    config = common.config({
        hash: false
    })
    /* ================================================================= **/;

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {

    const entryGlob = [
        Path.join('../src/app', env.PACKAGE, '**/index.{ts,js}'),
        // Path.join('../src/app', env.PACKAGE, '**/index.{scss,css}'),
        Path.join('!../src/app', env.PACKAGE, 'node_modules/**')
    ];

    return common.merge({
        entry: () => new Promise((resolve) => resolve(glob.sync(entryGlob).reduce((entrypoint, path) => {
            const parsePath = Path.parse(Path.relative(Path.join('../src/app', env.PACKAGE), path));
            const filename = Path.join(parsePath.dir, parsePath.name);
            entrypoint[filename] = [path];
            return entrypoint;
        }, {}))),
        output: {
            libraryTarget: 'umd',
            library: 'Master',
            path: Path.resolve('dist', env.PACKAGE)
        },
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin()
        ]
    }, config);
}