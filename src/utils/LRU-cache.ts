/**
 * 满足LRU（最近最少使用）缓存约束的数据结构
 **/
export class LRUCache {
  private cache: Map<number | string, number>
  private max: number

  constructor(capacity: number) {
    this.max = !isNaN(capacity) ? capacity : 10
    this.cache = new Map()
  }

  get(key: number | string): number {
    if (this.cache.has(key)) {
      const value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
    }
    return -1
  }
  put(key: number | string, value: any): void {
    if (this.cache.has(key)) this.cache.delete(key)
    else if (this.cache.size >= this.max) this.cache.delete(this.cache.keys().next().value)
    this.cache.set(key, value)
  }
}

export default LRUCache

// const LRUCacheTemp = new LRUCache(4)
// console.log(LRUCacheTemp.get(1))
// LRUCacheTemp.put(1, 'a')
// LRUCacheTemp.put(2, 'b')
// LRUCacheTemp.put(3, 'c')
// LRUCacheTemp.put(4, 'd')
// console.log(LRUCacheTemp.get(1))
// console.log(LRUCacheTemp.get(2))
// console.log(LRUCacheTemp.get(3))
// console.log(LRUCacheTemp.get(4))
// console.log(LRUCacheTemp.get(1))
