const
    /** Quick Config =================================================== */
    config = {
        extractCss: false, // true: bundle in js, false: export css file
        hash: true, // hash file name
        // https://github.com/jantimon/html-webpack-plugin#options
        template: {
            base: '/',
            favicon: 'src/assets/images/favicon.png',
            meta: {
                viewport: 'initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover'
            }
        }
    }
    /* ================================================================= **/;

const
    Path = require('path'),
    merge = require('webpack-merge'),
    // fs = require('fs'),
    // ejs = require('ejs'),
    renameIndexWithDirname = (pathStr) => {
        const parsePath = Path.parse(Path.relative('src', pathStr));
        if (parsePath.dir !== '' && parsePath.name === 'index') {
            return parsePath.dir + parsePath.ext;
        } else {
            return pathStr.split('src/')[1]
        }
    },
    glob = require('globby');

// webpack
const
    webpack = require('webpack'),
    // HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    SriPlugin = require('webpack-subresource-integrity')

module.exports = {
    config: (env) => {
        return merge(config, env);
    },
    merge: (webpackEnvConfig, env) => {
        // const templates = glob.sync([
        //     './src/**/index.html',
        //     '!./src/core/index.html',
        //     '!./src/assets/**/*'
        // ]);
        const webpackConfig = merge({
            entry: glob.sync([
                // './src/polyfill.ts',
                './src/**/index.{ts,js}',
                '!./src/assets/**/*'
            ]).reduce((entry, path) => {
                const parsePath = Path.parse(renameIndexWithDirname(path));
                entry[Path.join(parsePath.dir, parsePath.name)] = path
                return entry;
            }, {}),
            resolve: {
                extensions: ['.js', '.ts']
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
                                    babelrc: true
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(sass|scss|css)$/,
                        use: [
                            { loader: env.extractCss ? MiniCssExtractPlugin.loader : 'style-loader', },
                            { loader: 'css-loader' },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sassOptions: {
                                        includePaths: ['./node_modules']
                                    }
                                }
                            }]
                    },
                    {
                        test: /\.html$/,
                        loader: 'raw-loader'
                    },
                    {
                        test: /\.(png|jpe?g|gif|svg)$/i,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    outputPath: 'assets/images'
                                }
                            },
                            {
                                loader: 'image-webpack-loader'
                            },
                        ],
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/fonts'
                        }
                    },
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
                // ...templates.map((eachPathStr) => {
                //     const parsePath = Path.parse(renameIndexWithDirname(eachPathStr));
                //     return new HtmlWebpackPlugin(merge({
                //         chunks: ['core', 'polyfill', Path.join(parsePath.dir, parsePath.name)],
                //         templateContent: ({ htmlWebpackPlugin }) => {
                //             return ejs.render(
                //                 fs.readFileSync('src/core/index.html', 'utf8'),
                //                 {
                //                     htmlWebpackPlugin,
                //                     templateContent: fs.readFileSync(eachPathStr, 'utf-8')
                //                 },
                //                 {
                //                     views: ['src']
                //                 }
                //             );
                //         },
                //         filename: Path.join(parsePath.dir, parsePath.base)
                //     }, env.template));
                // }),
                new webpack.ProgressPlugin()
            ]
        }, webpackEnvConfig);

        if (env.extractCss) {
            webpackConfig.plugins.push(new MiniCssExtractPlugin({
                filename: env.hash ? '[name].[hash].css' : '[name].css',
                chunkFilename: env.hash ? '[name].[hash].css' : '[name].css'
            }))
        }

        if (webpackConfig.output.crossOriginLoading) {
            webpackConfig.plugins.push(
                new SriPlugin({
                    hashFuncNames: ['sha256', 'sha384']
                })
            )
        }

        return webpackConfig;
    },
};