var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app.js'
    ],
    devtool: 'eval-source-map',
    output:{
        filename: 'public/assets/js/bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query:{
              presets: ['react', 'es2017']
            },
            include: path.join(__dirname, 'src')
        }]
    }
};