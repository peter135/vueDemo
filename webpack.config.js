const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
          {
            loader: 'style-loader',
          },
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
            loader: 'adjust-sourcemap-loader',
          },
          
        //  { loader:'resolve-url-loader',
        //   options: { removeCR: true, sourceMap: true }  }],
        // include: [
        //   path.join(__dirname, 'src'),
        //   /node_modules/
        // ],
        // use:[
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       url: {
        //         filter: (url, resourcePath) => {
        //           // resourcePath - path to css file
      
        //           // Don't handle `data:` urls
        //           if (url.startsWith('data:')) {
        //             return false;
        //           }
      
        //           return true;
        //         },
        //       },
        //     } 
        //   },
        //   {
        //   // Run postcss actions
        //      loader: 'postcss-loader',
        //      options: {
        //        // `postcssOptions` is needed for postcss 8.x;
        //        // if you use postcss 7.x skip the key
        //        postcssOptions: {
        //          // postcss plugins, can be exported to postcss.config.js
        //          plugins: function () {
        //            return [
        //              require('autoprefixer')
        //            ];
        //          }
        //        }
        //      }
        //    }, 
      ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader','postcss-loader','sass-loader',]
      },
      {
        test: /\.less$/i,
        use: ['style-loader','css-loader','postcss-loader','less-loader',]
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
  resolve: {
    extensions: ['.js', '.vue','.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', '.svg', '.less'],
    alias: {
        '@': path.resolve(__dirname, './src'),
        // 'assets': path.resolve(__dirname, './src/assets')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      title: '手搭 Vue 开发环境'
    }),
    // 添加 VueLoaderPlugin 插件
    new VueLoaderPlugin(),

    new CleanWebpackPlugin(),
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
  }
}