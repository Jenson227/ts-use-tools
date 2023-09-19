export const WEEK_LABEL_LIST = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

/**
 * 获取自定义格式化时间格式
 *
 * @typedef { object } args
 * @property { Date | number | string } date - 自定义当前时间，默认当前时间
 * @property { string } format - 返回时间格式，默认yyyy/MM/dd hh:mm:ss，年/月/日 时:分:秒
 * @property { boolean } fillZero - 是否自动填充0补位
 *
 * @param { args } args
 * @return { string }
 **/
export const getFormattedDateTime: (args?: { date?: Date | number | string; format?: string; fillZero?: boolean }) => string = ({ date, format = 'yyyy/MM/dd hh:mm:ss', fillZero = true } = {}) => {
  if (!date) date = new Date()
  if (Number.isInteger(+date)) date = Number(date)
  if (typeof date === 'string') date = date.replace(/-/gm, '/')
  date = new Date(date)
  const [year, month, day, hour, minute, second, week] = [
    String(date.getFullYear()),
    String(date.getMonth() + 1),
    String(date.getDate()),
    String(date.getHours()),
    String(date.getMinutes()),
    String(date.getSeconds()),
    String(date.getDay())
  ]
  return format
    .replace(/yyyy/im, year)
    .replace(/yy/im, year.substring(2))
    .replace('MM', month.length === 1 && fillZero ? '0' + month : month)
    .replace(/dd/im, day.length === 1 && fillZero ? '0' + day : day)
    .replace(/hh/im, hour.length === 1 && fillZero ? '0' + hour : hour)
    .replace('mm', minute.length === 1 && fillZero ? '0' + minute : minute)
    .replace(/ss/im, second.length === 1 && fillZero ? '0' + second : second)
    .replace(/week/im, WEEK_LABEL_LIST[week] || '')
}
/**
 * 获取时间戳，单位毫秒（兼容ios无法使用'-'获取时间戳的问题）
 *
 * @param { string } dateTime - 日期字符串
 * @return { number }
 */
export const getDateTimestamp: (dateTime: string) => number = (dateTime = '') => {
  if (!dateTime) return new Date().getTime()
  return new Date(dateTime.replace(/-/g, '/')).getTime()
}

export default {
  WEEK_LABEL_LIST,
  getFormattedDateTime,
  getDateTimestamp
}
