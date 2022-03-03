const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname, '/build'),
        filename : 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx|tsx|ts)$/,
                exclude : /node_modules/,
                use : 'babel-loader'
            },
            {
                test : /\.css$/,
                use : 'style-loader'
            },
            {
                test : /\.css$/,
                use : 'css-loader'
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './public/index.html'
        })
    ]
};