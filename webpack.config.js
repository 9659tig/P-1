const path = require('path');
module.exports = {
    target: ['web', 'es5'],
    mode: 'development',
    entry: './public/index.js',
    output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
    },
    // module:{
    //   rules:[{
    //     options: {
    //       "plugins": [
    //         [
    //           "@babel/plugin-transform-runtime",
    //           {
    //             "absoluteRuntime": false,
    //             "corejs": 3,
    //             "helpers": true,
    //             "regenerator": true,
    //             "useESModules": false
    //           }
    //         ]
    //       ]
    //     },
    //   }]

    // }
    module : {
      rules : [
          {
              test : /\.js$/,
              exclude : /node_modules/,
              use : ['babel-loader']
          }
      ]
  },
}