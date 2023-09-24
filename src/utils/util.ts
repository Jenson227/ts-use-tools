/**
 * 判断数据变量类型
 *
 * @param { any } source - 来源数据
 * @return { string }
 **/
export const typeofData: (source: any) => string = source => Object.prototype.toString.call(source).slice(8, -1).toLowerCase()

/**
 * 判断是否为字符串
 *
 * @param { any } source - 来源数据
 * @return { boolean }
 **/
export const isString: (source: any) => boolean = source => typeofData(source) === 'string'

/**
 * 判断是否为空字符串
 *
 * @param { string } source - 来源数据
 * @return { boolean }
 **/
export const isNullString: (source: string) => boolean = source => isString(source) && (!source || !source.replace(/\s/g, ''))

/**
 * 判断是否是对象
 *
 * @param { any } source - 来源数据
 * @return { boolean }
 **/
export const isObject: (source: any) => boolean = source => typeofData(source) === 'object'

/**
 * 判断是否是空对象
 *
 * @param { any } source - 来源数据
 * @return { boolean }
 **/
export const isNullObject: (source: any) => boolean = source => isObject(source) && !Object.keys(source).length

/**
 * 判断是否是Date
 *
 * @param { any } source - 来源数据
 * @return { boolean }
 **/
export const isDate: (source: any) => boolean = source => typeofData(source) === 'date'

/**
 * 判断是否是数组
 *
 * @param { any } source - 来源数据
 * @return { boolean }
 **/
export const isArray: (source: any) => boolean = source => Array.isArray(source) || typeofData(source) === 'array'

/**
 * 判断是否是Promise函数
 *
 * @param { any } source - 来源数据
 * @return { boolean }
 **/
export const isPromise: (source: any) => boolean = source => typeofData(source) === 'promise' || (typeof source === 'object' && source.then && typeof source.then === 'function')

/**
 * 深拷贝数据
 *
 * @param { any } source - 来源数据
 * @return { any }
 **/
export const deepClone: (source: any) => any = source => {
  let result: any = null
  if (isObject(source)) result = {}
  else if (isArray(source)) result = []
  else return source

  //遍历目标数据
  for (const key in source) {
    const value: any = source[key]
    //object或array类型数据，进行递归
    if (isObject(source) || isArray(source)) result[key] = deepClone(value)
    //基本类型数据，进行赋值
    else result[key] = value
  }
  return result
}

/**
 * 通过函数解析 JSON 字符串
 *
 * @param { string } json - JSON 字符串
 * @return { any }
 **/
export const parseJSONByFunction: (json: string) => any = json => new Function('return ' + json)()

/**
 * 解析 JSON 字符串
 *
 * @param { string } json - JSON 字符串
 * @return { any }
 **/
export const parseJSON: (json: string) => any = (json = '') => {
  if (typeof json === 'string') {
    try {
      json = JSON.parse(json.trim().replace(/[\r|\n|\r\n|\t]/g, ''))
      if (typeof json === 'string') return parseJSON(json)
      return json
    } catch (errMsg) {
      if (/Expected property name or '}' in JSON/gim.test(errMsg)) return parseJSON(`"${json}"`)
      if (/Bad escaped character in JSON at position 169/gim.test(errMsg)) return parseJSON(parseJSONByFunction(json))
      return {}
    }
  }
  return json
}

/**
 * 解析 URL 中的参数
 *
 * @typedef { object } config
 * @property { string } url - 过滤参数后的 URL
 * @property { any } query - URL 中的参数
 *
 * @param { string } url - URL 字符串
 * @return { config }
 **/
export const parseUrl: (url: string) => { url: string; query: any } = (url = '') => {
  // 处理掉如 /pages/index 这类路径的第一个斜杆
  url = url.substring(url.charAt(0) === '/' ? 1 : 0)
  // 去掉hash
  const marIndex = url.indexOf('#')
  if (marIndex !== -1) url = url.slice(0, marIndex)
  let query: any = {}
  const [_url, params] = url.split('?')
  if (params)
    query = params.split('&').reduce((result, item) => {
      const [key, value] = item.split('=')
      return {
        ...result,
        [key]: value
      }
    }, {})
  return {
    url: _url,
    query
  }
}

export default {
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
