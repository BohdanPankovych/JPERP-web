const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'),
    jsPath = './src',
    distPath = './dist',
    srcPath = path.join(__dirname, jsPath),
    outputPath = path.join(__dirname, distPath);

module.exports = {
    optimization: {
        minimize: false
    },
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    entry: {
        test: [path.join(srcPath, '/index.js')],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html",
        filename: "index.html",
        favicon: "assets/icons/favicon.png",
    })],
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: outputPath,
        compress: true,
        port: 3000,
        historyApiFallback: true,
        open: true,
        openPage: '',
        proxy: {
            '/api': 'http://yourBackendDomainNameOrIpAdress'
        }
    },

    context: srcPath,
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|ico|png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
