// // var path = require('path');
// // var webpack = require('webpack');

// module.exports = {
//     entry: [
//         "/src/app.js"
//     ],
//     output:{
//         filename: 'public/assets/js/bundle.js',
//     },
//     module: {
//         loaders: [{
//             test: /\.js$/,
//             loader: 'babel',
//             query:{
//               presets: ['react', 'es2015']
//             },
//             include: path.join(__dirname, 'src')
//         }]
//     }
// };


module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./src/app.js",

  // The plain compiled Javascript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
