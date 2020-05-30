const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'copyright-x.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization : {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                  }
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css'],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};