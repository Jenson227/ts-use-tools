export class LRUCache {
  cache = new Map()
  max = 10

  constructor(capacity: number) {
    if (!isNaN(capacity)) this.max = capacity
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
// console.log(LRUCacheTemp.cache)
// console.log(LRUCacheTemp.get(1))
// console.log(LRUCacheTemp.cache)
// console.log(LRUCacheTemp.cache.keys().next())
