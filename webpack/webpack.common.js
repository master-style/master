const
    /** Quick Config =================================================== */
    config = {
        hash: true, // hash file name
    }
    /* ================================================================= **/;

const
    Path = require('path'),
    merge = require('webpack-merge'),
    renameIndexWithDirname = (relativePathStr) => {
        const parsePath = Path.parse(relativePathStr);
        if (parsePath.dir !== '' && parsePath.name === 'index') {
            return parsePath.dir + parsePath.ext;
        } else {
            return relativePathStr
        }
    },
    glob = require('globby');

// webpack
const
    Webpack = require('webpack'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entryGlob = [
    // './src/polyfill.ts',
    './src/**/index.{ts,js}',
    './src/index.{ts,js}',
    '!./src/assets/**/*'
];

module.exports = {
    config: (env) => {
        return merge(config, env);
    },
    merge: (envWebpack, env) => {
        const webpack = merge({
            entry: () => new Promise((resolve) => resolve(glob.sync(entryGlob).reduce((entrypoint, path) => {
                const relativePath = Path.relative('src', path);
                const parsePath = Path.parse(relativePath);
                console.log(parsePath.dir, parsePath.name);
                entrypoint[Path.join(parsePath.dir, parsePath.name)] = relativePath;
                return entrypoint;
            }, {}))),
            context: Path.resolve('src'),
            resolve: {
                extensions: ['.js', '.ts', '.scss'],
                modules: [Path.resolve('src'), 'node_modules']
            },
            module: {
                rules: [
                    {
                        test: /\.ts$/, loader: 'ts-loader'
                    },
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    babelrc: './babelrc'
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(sass|scss|css)$/,
                        use: [
                            { loader: 'css-loader' },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        config: 'postcss.config.js',
                                    },
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sassOptions: {
                                        includePaths: ['./node_modules']
                                    }
                                }
                            }]
                    }
                ]
            },
            output: {
                filename: env.hash ? '[name].[hash].js' : '[name].js'
            },
            optimization: {
                runtimeChunk: 'single',
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendor',
                            chunks: 'all',
                        },
                    },
                }
            },
            plugins: [
                new Webpack.ProgressPlugin()
            ]
        }, envWebpack);

        return webpack;
    },
};