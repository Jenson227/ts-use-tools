// import { requireContext } from './nodejs/require-context'
// const contextLoaders = requireContext({ dirPath: __dirname + '/utils', matching: /\.(t|j)s$/ })
// const moduleExports = Object.values(contextLoaders).reduce((result: any, contextLoader: any) => {
//   const moduleExport = (contextLoader && contextLoader.module) || {}
//   return {
//     ...result,
//     ...moduleExport
//   }
// }, {})
// module.exports = moduleExports
// export default moduleExports

// 导入 ts 文件用. ts 后缀且不检查 ts 语法，是为了解决无法使用 nodemon 和 webpack 的导入 ts 文件问题
// @ts-nocheck
// @ts-ignore
import './utils/algorithm.ts'
import { LRUCache } from './utils/LRU-cache.ts'
import { WEEK_LABEL_LIST, getFormattedDateTime, getDateTimestamp } from './utils/moment.ts'
import { typeofData, isString, isNullString, isObject, isNullObject, isDate, isArray, isPromise, deepClone, parseJSONByFunction, parseJSON, parseUrl } from './utils/util.ts'

export {
  LRUCache,
  WEEK_LABEL_LIST,
  getFormattedDateTime,
  getDateTimestamp,
  typeofData,
  isString,
  isNullString,
  isObject,
  isNullObject,
  isDate,
  isArray,
  isPromise,
  deepClone,
  parseJSONByFunction,
  parseJSON,
  parseUrl
}
export default {
  LRUCache,
  WEEK_LABEL_LIST,
  getFormattedDateTime,
  getDateTimestamp,
  typeofData,
  isString,
  isNullString,
  isObject,
  isNullObject,
  isDate,
  isArray,
  isPromise,
  deepClone,
  parseJSONByFunction,
  parseJSON,
  parseUrl
}
