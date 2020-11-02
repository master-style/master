const
    /** Quick Config =================================================== */
    config = {
        extractCss: false, // true: bundle in js, false: export css file
        hash: true, // hash file name
    }
    /* ================================================================= **/;

const
    Path = require('path'),
    glob = require('globby'),
    merge = require('webpack-merge');
    // fs = require('fs'),
    // ejs = require('ejs'),

// webpack
const
    webpack = require('webpack'),
    // HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    SriPlugin = require('webpack-subresource-integrity')

    console.log(glob.sync([
        '../src/**/index.{ts,js}',
        '!../src/assets/**/*'
    ]))


module.exports = {
    config: (env) => {
        return merge(config, env);
    },
    merge: (webpackEnvConfig, env) => {
        const webpackConfig = merge({
            entry: glob.sync([
                '../src/**/index.{ts,js}',
                '!../src/assets/**/*'
            ]),
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