const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './build'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            projectReferences: false
          }
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(), // run type-checking in separate process, speeds up build by 20%
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    pathinfo: false
  }
};
