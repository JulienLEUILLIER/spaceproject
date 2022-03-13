const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '..', './build'),
      filename: 'bundle.js',
      clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, '..', './src/index.html')
        }),
    ],
    
  }