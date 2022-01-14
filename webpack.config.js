const path = require('path');
module.exports = {
    mode: 'development',
    entry: './public/main.js',
    output: { path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js',
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

}