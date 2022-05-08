const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const DevelopmentMode = process.env.NOVE_ENV === 'development';
const ProductionMode = !DevelopmentMode;

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: './style/[name].[contenthash].css',
  }),
];
if (process.env.NODE_ENV === DevelopmentMode) {
  plugins.push('react-refresh/babel');
}
if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

// const productionConfig = merge([
//   {
//     output: {
//       publicPath: '/Virtual_Keyboard/',
//     },
//   },
// ]);

module.exports = {
  mode,
  plugins,
  target,
  // productionConfig,
  context: path.resolve(__dirname, 'src'),
  devtool: 'eval-source-map',
  entry: {
    main: ['@babel/polyfill', './js/index.js'],
    support: './js/sup.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: DevelopmentMode,
    compress: true,
    open: true,
    port: 3001,
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
        generator: {
          filename: '[path][contenthash][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path][contenthash][ext]',
        },
      },
      {
        test: /\.(json)$/i,
        type: 'asset/source',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
