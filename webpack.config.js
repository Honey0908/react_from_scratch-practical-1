const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), // to define output directory
        filename: '[name].js', // to define the name of the output file
        clean: true, // to clean up the output directory before each build
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3030, // to define the port number for the dev server
        open: true, // to open the browser automatically
        hot: true, // to enable hot module replacement
        compress: true, // to enable gzip compression
        historyApiFallback: true, // to enable HTML5 history API fallback
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
};