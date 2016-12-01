var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var glob = require('glob');

//各文件夹路径
var ROOT_PATH = path.resolve(__dirname);
var STATIC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist')

// 获取构建环境参数
var NODE_ENV = process.env.NODE_ENV;
var isProduction = NODE_ENV === 'production' ? true : false;
var isTest = NODE_ENV === 'test' ? true : false;

//入口js
var entryFiles = glob.sync(STATIC_PATH + '/**/index.{js,jsx}');
var entryJs = {};
// console.log(entryFiles);
entryFiles.forEach(function(filePath){
    var entryName = filePath.substring(filePath.lastIndexOf('/src/')+5 , filePath.lastIndexOf('\/'))
    entryJs[entryName] = filePath;
})
// console.log(entryJs)

//设置资源路径
// var pubPath = 'http://dev.m.zhe800.com:8080/dist2/';
// if (isProduction || isTest) {
//     pubPath = 'http://i0.tuanimg.com/ms/h5public/dist2/';
// }

module.exports = {
    entry: Object.assign(entryJs, {
        'vender': ['vue']
    }),
    output: {
        path: DIST_PATH,
        publicPath: '/dist/',
        filename: isProduction ? '[name]/[name].[chunkhash].js' : '[name]/[name].js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
}