const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            "@": path.resolve("src"),
        }
    },
    entry: {
        index: path.resolve('src/index.tsx')
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("public/index.html"),
            filename: "index.html",
            title: "React&TS"
        })
    ],
    devServer: {
        port: process.env.PORT || 8080,
        historyApiFallback: true,
        disableHostCheck: true
    },
    devtool: "source-map"
};
