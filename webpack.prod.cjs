const path = require('path')
const fs = require('fs')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const outputFileName = 'use-jtools.min.js'

const packageConfig = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')))
const publicPackagePath = path.join(__dirname, './public/package.json')
const publicPackageConfig = JSON.parse(fs.readFileSync(publicPackagePath))
publicPackageConfig.name = packageConfig.name
publicPackageConfig.version = packageConfig.version
publicPackageConfig.description = packageConfig.description
publicPackageConfig.main = outputFileName
publicPackageConfig.scripts.start = 'node ' + outputFileName
fs.writeFileSync(publicPackagePath, JSON.stringify(publicPackageConfig, null, 2))

module.exports = {
  mode: 'production',
  //指定入口文件
  entry: './src/main.ts',
  //指定打包文件所在的目录
  output: {
    //利用path可完整拼出打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    //打包后的文件
    filename: publicPackageConfig.main,
    environment: {
      arrowFunction: false
    }
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production'
  },
  module: {
    //指定要加载的规则
    rules: [
      {
        //test指定的是规则生效的文件
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      chrome: '60',
                      edge: '17'
                    },
                    corejs: '3',
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        //排除要处理的文件
        exclude: /node_modules/
      },
      {
        //test指定的是规则生效的文件
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      chrome: '60',
                      edge: '17'
                    },
                    corejs: '3',
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          }
        ],
        //排除要处理的文件
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          to: './'
        }
      ]
    })
  ],
  // 模块配置：webpack了解哪些方法可以被当作模块/入
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
