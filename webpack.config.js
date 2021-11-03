const path = require('path');

module.exports = {
    entry: path.resolve('./src/App'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/js/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
