import path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './build'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
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
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    assetModuleFilename: '[name][ext]', // keep img original name
    clean: true,
    pathinfo: false
  }
}

export default config;
