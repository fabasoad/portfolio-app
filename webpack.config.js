const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            test: /\.s?css$/
        }]
    },
    devtool: 'eval-nosources-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    }
};