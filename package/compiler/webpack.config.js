
const path = require('path');
const Webpack = require('webpack');
const glob = require('globby');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const package = require('../package.json');

module.exports = env => {
    const entryGlob = [
        path.join('../src/**/index.{ts,js}'),
        path.join('../src/**/index.{sass|scss|css}')
    ];

    return {
        entry: () => new Promise((resolve) => resolve(
            glob.sync(entryGlob).reduce((entrypoint, eachPath) => {
                const parsePath = path.parse(path.relative(path.join('../src'), eachPath));
                const filename = path.join(parsePath.dir, parsePath.name);
                entrypoint[filename] = [eachPath];
                return entrypoint;
            }, {}))
        ),
        mode: 'production',
        resolve: {
            extensions: ['.js', '.ts'],
            modules: [path.resolve('../src'), path.resolve('../node_modules')]
        },
        externals: Object.keys(package.dependencies),
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve('../tsconfig.json')
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
            path: path.resolve('../dist'),
            libraryTarget: 'umd'
        },
        plugins: [
            new CleanWebpackPlugin(),
            new Webpack.ProgressPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false
            })
        ]
    }
}