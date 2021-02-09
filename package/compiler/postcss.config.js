module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: [
                'ie >= 11'
            ]
        })
    ]
}