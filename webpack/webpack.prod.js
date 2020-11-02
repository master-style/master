const
    merge = require('webpack-merge'),
    COMMON = require('./webpack.common.js');
    TerserWebpackPlugin = require('terser-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(COMMON.WEBPACK_CONFIG, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                cache: true,
                extractComments: false,
                parallel: true,
                exclude: /\.min.js/,
                // terserOptions: optimizer.script.uglify
            })
        ],
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
        new CleanWebpackPlugin(),
    ]
});
