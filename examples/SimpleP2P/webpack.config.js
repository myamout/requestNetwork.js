var webpack = require('webpack');

module.exports = {
    entry: {
        main: ['./frontend_src/main'],
    },
    output: {
        filename: '[name]-bundle.js',
        path: __dirname + '/dist/js'
    },
    module: {
        
    },
};
