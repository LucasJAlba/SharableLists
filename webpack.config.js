var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: "./app/main.ts",
        vendor: "./app/vendor.ts"
    },
    output: {
        path: 'dist',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
        preLoaders: [
            /*{
              test: /\.ts$/,
               exclude: /node_modules/,
               loader: 'jshint-loader'
   
           }*/
        ],
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    watch: true
};