const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const cleanPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: "production",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: false,
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|svg|jpg|png|mp4|crdownload)$/,
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
    plugins: [
        new MiniCssExtractPlugin(),
        new cleanPlugin.CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['**/*', '!static-files'],
        })
    ],
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js",
        publicPath: '/',
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