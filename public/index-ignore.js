const path = require('path')
const fs = require('fs')
const packageConfig = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json')))
const fileName = packageConfig.name

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  // 通过环境变量来决定入口文件
  module.exports = require('./libs/' + fileName + '.min.js')
} else {
  module.exports = require('./libs/' + fileName + '.js')
}
