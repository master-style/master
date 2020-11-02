const
    /** Quick Config =================================================== */
    config = {
        hash: true, // hash file name
    }
    /* ================================================================= **/;

const
    Path = require('path'),
    merge = require('webpack-merge'),
    glob = require('globby'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    Webpack = require('webpack');

const entryGlob = [
    './src/**/*/index.{ts,js}',
    './src/**/*/index.{scss,css}',
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
                        test: /\index.(sass|scss|css)$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
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
                new Webpack.ProgressPlugin(),
                new MiniCssExtractPlugin({
                    filename: env.hash ? '[name].[hash].css' : '[name].css',
                    chunkFilename: env.hash ? '[name].[hash].css' : '[name].css'
                })
            ]
        }, envWebpack);

        return webpack;
    },
};