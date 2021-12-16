const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|svg|jpe?g|png|mp4|crdownload)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js",
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './public/'),
        hot: true,
    },
};


// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// let mode = "development";

// if (process.env.NODE_ENV === "production") {
//     mode = "production";
// }

// module.exports = {
//     mode: mode,

//     module: {
//         rules: [
//             {
//                 test: /\.s?css$/i,
//                 use: [
//                     {
//                         options: { publicPath: "" },
//                         loader: MiniCssExtractPlugin.loader,
//                     },
//                     "css-loader",
//                     "sass-loader"
//                 ],
//             },
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                 },
//             },
//             // {
//             //     test: /\.html$/i,
//             //     loader: "html-loader",
//             // },
//         ],
//     },

//     plugins: [new MiniCssExtractPlugin()],

//     resolve: {
//         extensions: [".js", ".jsx"]
//     },

//     devtool: "source-map",
//     devServer: {
//         static: "./dist",
//         hot: true,
//     },

// }