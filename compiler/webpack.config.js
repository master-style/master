
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const glob = require('globby');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
    const entryGlob = [
        path.join('../src/app', env.PACKAGE || '', '**/index.{ts,js}'),
        // path.join('../src/app', env.PACKAGE, '**/index.{scss,css}'),
        path.join('!../src/app', env.PACKAGE || '', 'node_modules/**')
    ];

    return {
        entry: () => new Promise((resolve) => resolve(glob.sync(entryGlob).reduce((entrypoint, eachPath) => {
            const parsePath = path.parse(path.relative(path.join('../src/app', env.PACKAGE || ''), eachPath));
            const filename = path.join(parsePath.dir, parsePath.name);
            entrypoint[filename] = [eachPath];
            return entrypoint;
        }, {}))),
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
            ],
        },
        resolve: {
            extensions: ['.js', '.ts', '.scss'],
            modules: [path.resolve('../src'), 'node_modules']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve('../', 'tsconfig.app.json')
                    }
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                babelrc: true
                            }
                        }
                    ]
                },
                {
                    test: /index\.(sass|scss|css)$/,
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
            libraryTarget: 'umd',
            library: 'Master',
            path: path.resolve('dist', env.PACKAGE || '')
        },
        plugins: [
            new CleanWebpackPlugin(),
            new Webpack.ProgressPlugin(),
            // new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css'
            })
        ]
    }
}