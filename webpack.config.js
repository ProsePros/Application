var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/app.js'
    ],
    output:{
        filename: 'public/assets/js/bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query:{
              presets: ['react', 'es2015']
            },
            include: path.join(__dirname, 'src')
        }]
    }
};