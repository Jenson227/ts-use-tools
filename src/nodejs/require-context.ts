const path = require('path')
const fs = require('fs')

const load = (path, name) => (name ? require(path + '/' + name) : require(path))
/**
 * 低配版webpack的require.context
 *
 * @typedef { object } args
 * @property { string } dirPath - 目录路径
 * @property { string } matching - 匹配正则
 * @property { string } requireDefault - 是否导入模块默认值
 *
 * @param { args } args
 * @return { any }
 **/
module.exports = function ({ dirPath = '', matching = /\./, requireDefault = false }: { dirPath: string; matching?: RegExp; requireDefault?: boolean }) {
  const loaders = {}

  // const files = fs.readdirSync(__dirname + '/' + dirPath)
  const files = fs.readdirSync(dirPath)
  files.forEach((fileName = '') => {
    if (!matching.test(fileName)) return
    const fileExt = '.' + fileName.split('.').pop()
    // const fileBaseName = path.basename(fileName, '.ts')
    const fileBaseName = path.basename(fileName, fileExt)
    const moduleExport = load(dirPath, fileBaseName)
    if (moduleExport.default && !requireDefault) delete moduleExport.default
    loaders[fileBaseName] = {
      fileBaseName,
      fileName,
      fileExt,
      module: moduleExport
    }
  })
  return loaders
}
