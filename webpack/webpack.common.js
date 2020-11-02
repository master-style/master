const
    /** Quick Config =================================================== */
    config = {
        extractCss: false, // true: bundle in js, false: export css file
        hash: true, // hash file name
        // https://github.com/jantimon/html-webpack-plugin#options
        template: {
            base: '/',
            meta: {
                viewport: 'initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover'
            }
        },
        // https://github.com/webpack-contrib/copy-webpack-plugin
        copy: {
            patterns: [
                { from: 'assets/**/*' }
            ],
        }
    }
    /* ================================================================= **/;

const
    Path = require('path'),
    merge = require('webpack-merge'),
    ejs = require('ejs'),
    renameIndexWithDirname = (relativePathStr) => {
        const parsePath = Path.parse(relativePathStr);
        if (parsePath.dir !== '' && parsePath.name === 'index') {
            return parsePath.dir + parsePath.ext;
        } else {
            return relativePathStr
        }
    },
    glob = require('globby');

ejs.resolveInclude = (name, filename, isDir) => {
    let includePath = Path.resolve(isDir ? filename : Path.dirname(filename), name);
    const ext = Path.extname(name);
    if (!ext) {
        includePath += '.html';
    }
    return includePath;
};

// webpack
const
    Webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    SriPlugin = require('webpack-subresource-integrity'),
    CopyPlugin = require('copy-webpack-plugin');

const entryGlob = [
    './src/polyfill.ts',
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
                const parsePath = Path.parse(renameIndexWithDirname(relativePath));
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
                                    babelrc: true
                                }
                            }
                        ]
                    },
                    {
                        test: /\.html$/,
                        loader: 'html-loader',
                        options: {
                            preprocessor: (content, loaderContext) => {
                                return ejs.render(
                                    content, {},
                                    {
                                        views: ['src'],
                                        includer: (originalPath, parsedPath) => {
                                            loaderContext.addDependency(parsedPath)
                                        }
                                    }
                                )
                            },
                        }
                    },
                    {
                        test: /\.(sass|scss|css)$/,
                        use: [
                            { loader: env.extractCss ? MiniCssExtractPlugin.loader : 'style-loader', },
                            { loader: 'css-loader' },
                            { loader: 'postcss-loader' },
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
                        test: /\.(png|jpe?g|gif|svg)$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: false,
                                    name: '[name].[ext]',
                                    outputPath: 'assets/images',
                                    publicPath: '/assets/images'
                                }
                            },
                            {
                                loader: 'image-webpack-loader'
                            }
                        ],
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: false,
                                    name: '[name].[ext]',
                                    outputPath: 'assets/fonts'
                                }
                            }
                        ]
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
                new Webpack.ProgressPlugin(),
                new CopyPlugin(env.copy),
                new class {
                    apply(compiler) {
                        compiler.hooks.compilation.tap('PreprocessTemplate', compilation => {
                            HtmlWebpackPlugin
                                .getHooks(compilation)
                                .alterAssetTags
                                .tapAsync('PreprocessTemplate', (template, done) => {
                                    template.assetTags.scripts.forEach((scriptTag) => {
                                        template.assetTags.meta.push({
                                            tagName: 'link',
                                            attributes: {
                                                href: scriptTag.attributes.src,
                                                rel: 'preload',
                                                as: 'script'
                                            }
                                        })
                                    })
                                    template.assetTags.styles.forEach((styleTag) => {
                                        template.assetTags.meta.push({
                                            tagName: 'link',
                                            attributes: {
                                                href: styleTag.attributes.href,
                                                rel: 'preload',
                                                as: 'style'
                                            }
                                        })
                                    })
                                    done();
                                });
                        });
                    }
                }
            ]
        }, envWebpack);

        glob.sync([
            './src/index.html',
            './src/**/*/index.html',
            '!./src/assets/**/*'
        ]).forEach((templateSrcPath) => {
            const relativePath = Path.relative('src', templateSrcPath);
            const templatePath = renameIndexWithDirname(relativePath);
            const parsePath = Path.parse(templatePath);
            const currentChunk = Path.join(parsePath.dir, parsePath.name);
            const chunks = ['core', 'polyfill', 'vendor', 'runtime', currentChunk];
            webpack.plugins.push(
                new HtmlWebpackPlugin(merge({
                    chunks,
                    template: relativePath,
                    filename: templatePath
                }, env.template))
            )
        })

        if (env.extractCss) {
            webpack.plugins.push(new MiniCssExtractPlugin({
                filename: env.hash ? '[name].[hash].css' : '[name].css',
                chunkFilename: env.hash ? '[name].[hash].css' : '[name].css'
            }))
        }

        if (webpack.output.crossOriginLoading) {
            webpack.plugins.push(
                new SriPlugin({
                    hashFuncNames: ['sha256', 'sha384']
                })
            )
        }

        return webpack;
    },
};