// @ts-nocheck
// @ts-ignore
import LRUCache from './utils/LRU-cache.ts'

const LRUCacheTemp = new LRUCache(4)
console.log(LRUCacheTemp.get(1))
LRUCacheTemp.put(1, 'a')
LRUCacheTemp.put(2, 'b')
LRUCacheTemp.put(3, 'c')
LRUCacheTemp.put(4, 'd')
console.log(LRUCacheTemp.get(1))
console.log(LRUCacheTemp.get(2))
console.log(LRUCacheTemp.get(3))
console.log(LRUCacheTemp.get(4))
console.log(LRUCacheTemp.cache)
console.log(LRUCacheTemp.get(1))
console.log(LRUCacheTemp.cache)
console.log(LRUCacheTemp.cache.keys().next())

export default {
  LRUCache
}
