// const requireContext = require('./nodejs/require-context')
// const contextLoaders = requireContext({ dirPath: __dirname + '/utils', matching: /\.(t|j)s$/ })
// const moduleExports = Object.values(contextLoaders).reduce(
//   (result: any = {}, contextLoader: any) => ({
//     ...result,
//     ...((contextLoader && contextLoader.module) || {})
//   }),
//   {}
// )
// module.exports = moduleExports
// export default moduleExports

// 导入 ts 文件用. ts 后缀且不检查 ts 语法，是为了解决无法使用 nodemon 和 webpack 的导入 ts 文件问题
// @ts-nocheck
// @ts-ignore
// import { LRUCache } from './utils/LRU-cache.ts'
// export default { LRUCache }
// export { LRUCache }

// const utilsModules = ['LRU-cache', 'moment']
// const moduleExports = utilsModules.reduce((result = {}, moduleName = '') => {
//   const moduleExport = require(`./utils/${moduleName}`)
//   return {
//     ...result,
//     ...moduleExport
//   }
// }, {})
// delete moduleExports.default
// export default moduleExports
// console.log(module.exports)

import utils from '../dist/index.js'
console.log(123)
console.log(utils)
