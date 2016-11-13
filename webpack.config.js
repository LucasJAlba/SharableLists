module.exports = {
    entry: "./app/app.js",
    output: {
        path: __dirname,
        filename: "./app/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'] 
                }
            }
        ],
        preLoaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'

        }
    ],
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    watch: true
};