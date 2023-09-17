const path = require('path')
const fs = require('fs')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const packageConfig = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')))
const fileName = packageConfig.name
const outputPackagePath = path.join(__dirname, './public/package.json')
const outputPackageConfig = JSON.parse(fs.readFileSync(outputPackagePath))
outputPackageConfig.name = fileName
outputPackageConfig.version = packageConfig.version
outputPackageConfig.description = packageConfig.description
outputPackageConfig.author = packageConfig.author
fs.writeFileSync(outputPackagePath, JSON.stringify(outputPackageConfig, null, 2))

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    globalObject: 'globalThis',
    library: 'jtools',
    libraryTarget: 'umd',
    environment: {
      arrowFunction: false
    }
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        // include: /\.min\.js$/
        include: /\.js$/
      })
    ]
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
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.tsx', '.ts', '.js']
  },
  target: 'node'
}
