const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./main.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "whole"),
    },
    devServer: {
        hot: true, // Enable hot module replacement
        contentBase: path.resolve(__dirname, "whole"), // Serve files from "whole" directory
    },
    resolve: {
        extensions: [".js", ".cjs"], // Add ".cjs" to the list of recognized file extensions
    },
    module: {
        rules: [
            {
                test: /\.cjs$/, // Handle files with ".cjs" extension
                use: 'babel-loader', // Use babel-loader for transpilation (adjust loader as needed)
            },
            // Add more rules for other file types if necessary
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Add HotModuleReplacementPlugin
    ],
};

