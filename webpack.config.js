const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack');

// const PurgecssPlugin = require('purgecss-webpack-plugin')
// const glob = require('glob')
// const PATHS = {
//   src: path.join(__dirname, './src')
// }

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [  
          MiniCssExtractPlugin.loader,
          // {
          //   loader: 'style-loader',
          // },
          {
            loader: 'css-loader',
            options: {
              url: {
                   filter: (url, resourcePath) => {
                     // resourcePath - path to css file
            
                     // Don't handle `data:` urls
                     if (url.startsWith('data:')) {
                       return false;
                     }
            
                     return true;
                   },
                 },
            } 
          },
          {
            loader: 'postcss-loader',
          }
      ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,
          // 'style-loader', 
          'css-loader','postcss-loader','sass-loader',]
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader','postcss-loader','less-loader',]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash].[ext]'
        }
      }
    ]
  },
  optimization: {
    minimize: true, // 可省略，默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
    minimizer: [
        new TerserPlugin({
            parallel: true, // 可省略，默认开启并行
            terserOptions: {
                toplevel: true, // 最高级别，删除无用代码
                ie8: true,
                safari10: true,
            }
        }),
        new CssMinimizerPlugin({
          parallel: true, // 可省略，默认开启并行
          // sourceMap: true, // 可省略，默认遵循webpack的devtool配置
          minimizerOptions: {
              // preset: 'advanced', // 需额外安装
          },
      })
    ],
    // splitChunks 配置
    splitChunks: {
      cacheGroups: {
        default: {
          name: 'vendor',
          // 把第三方库放到 vendor 里，包括 vue, vue-router, vuex 等
          // 因为他们都是从 node_modules 里加载的，这里直接正则匹配
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          // 调整优先级，优先处理
          priority: 10,
        },
        common: {
          chunks: 'all',
          name: 'common',
          // 匹配 entry 里的 common 配置
          test: 'common',
        },
      },
    },
	  // runtime 代码放在 runtime 文件中
    runtimeChunk: {
      name: 'runtime',
    },
    // splitChunks: {
    //   // include all types of chunks
    //   chunks: 'all',
    //   // 重复打包问题
    //   cacheGroups:{
    //     vendors:{ // node_modules里的代码
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: "all",
    //       // name: 'vendors', 一定不要定义固定的name
    //       priority: 10, // 优先级
    //       enforce: true 
    //     }
    //   }
    // }
  },
  resolve: {
    extensions: ['.js', '.vue','.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', '.svg', '.less'],
    alias: {
        '@': path.resolve(__dirname, './src'),
        // 'assets': path.resolve(__dirname, './src/assets')
    }
  },
  plugins: [
    // new CompressionPlugin({
    //   algorithm: 'gzip',
    //   threshold: 10240,
    //   minRatio: 0.8
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new BundleAnalyzerPlugin(),

    new MiniCssExtractPlugin(),

    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      title: '手搭 Vue 开发环境'
    }),
    // 添加 VueLoaderPlugin 插件
    new VueLoaderPlugin(),

    new CleanWebpackPlugin(),

    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    // }),

    // new MiniCssExtractPlugin({
    //   filename: 'style.[contenthash].css', // 指定文件名 生产环境可写成 style.[contenthash].css 避免缓存问题
    // }),

  ],
  devServer: {
    // contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    hot: true,
    proxy: {
      '/api': {
        target: 'https://other-server.example.com',
        secure: false,
        changeOrigin: true,
      },
    },
  },

}