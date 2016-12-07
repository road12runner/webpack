var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var commonsPluging = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
  context : path.resolve('js'),
  // entry: ['./utils', './app'],
  entry : {
    // about: './about_page',
    // home: './home_page',
    // contact: './contact_page'
    //express: './middleware_app'
    custom_loader : './custom_app'
  },
  output: {
    path: path.resolve('build/'),
    publicPath : '/public/assets/',
    // filename: 'bundle.js'
    filename: "[name].js"
  },

  plugins: [
     new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: 'public'
  },
  watch: true,

  module: {
    // preLoaders: [
    //   {
    //     test: /\.js/,
    //     exclude: 'node-modules',
    //     loader: 'jshint-loader'
    //   }
    // ],
    loaders: [
      {
        test: /\.es6/,
        exclude: /node-modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader")
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        //loader: 'style-loader!'
      },
      {
        test: /\.(png|jpg|ttf|eof)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        loader: 'json-loader!' + path.resolve('loaders/strip')
      }

    ]
  },
  resolve : {
    extensions: ['', '.js', '.es6']
  }
};
