const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: ['.js', '.jsx', '.tsx'],
    },
    entry: {
        app:"./index.tsx",
        appStyles: "./mystyles.scss",
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/htmlwebpack-plugin
        new HtmlWebpackPlugin({
        filename: 'index.html', //Name of file in ./dist/
        template: "./index.html", //Name of template in ./src
        scriptLoading:'blocking', // Just use the blocking approach (no modern deferor module)
        }),
        new CleanWebpackPlugin(),
    ],
};