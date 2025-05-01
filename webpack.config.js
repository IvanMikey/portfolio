// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'static/js/[name].[contenthash:8].js',
        publicPath: '/portfolio/'
    },
    resolve: {
        alias: {
            'swiper': 'swiper/bundle', // or the correct path to the swiper bundle
        },
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false
        }
    }
};