// const fs = require('fs')
// const moduleExports = {}
// fs.readdir('src/utils', (err, files) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   files
//     .filter(file => file.endsWith('.ts'))
//     .forEach(file => {
//       const module = require(`./utils/${file}`)
//       Object.assign(moduleExports, module)
//     })
// })
// module.exports = moduleExports

// 这里导入 ts 文件用. ts 后缀且不检查 ts 语法，是为了解决无法使用 nodemon 和 webpack 的导入 ts 文件问题
// @ts-nocheck
// @ts-ignore
import { LRUCache } from './utils/LRU-cache.ts'
export default { LRUCache }
export { LRUCache }
