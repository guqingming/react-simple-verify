const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.NODE_ENV === 'production' ?
  'production' :
  'development'

const extractOrInjectStyles = env !== 'production' ?
  'vue-style-loader' :
  MiniCssExtractPlugin.loader

module.exports = {
  mode: env,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      '@dev': path.resolve(__dirname, '../dev'),
      '@src': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          extractOrInjectStyles,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
            loader: "file-loader",
            options: {
              limit: 1000000,
              name: "img/[name]-[hash:5].[ext]"
            }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new MiniCssExtractPlugin({
      filename: 'vue-simple-verify.css'
    }),
    new VueLoaderPlugin()
  ],
  stats: {
    children: false,
    modules: false
  }
}
