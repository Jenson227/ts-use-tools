// 两数之和
function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i]
    if (numMap.has(n)) return [numMap.get(n), i]
    numMap.set(nums[i], i)
  }
  return []
}
twoSum([2, 7, 11, 15], 9)

// 位运算
// const enum ShapeFlags {
//   a = 1,
//   b = 1 << 1,
//   c = 1 << 2,
//   d = 1 << 3,
//   e = 1 << 9,
//   f = ShapeFlags.a | ShapeFlags.c | ShapeFlags.e
// }
// console.log(ShapeFlags.a)
// console.log(ShapeFlags.b)
// console.log(ShapeFlags.c)
// console.log(ShapeFlags.d)
// console.log(ShapeFlags.e)
// console.log(ShapeFlags.f)
// console.log(ShapeFlags.f & ShapeFlags.d)

// 三数之和
function threeSum(nums: number[]): number[][] {
  // nums.sort((a, b) => a - b)
  // const resultMap = new Map<string, number[]>()
  // for (let i = 0; i < nums.length; i++) {
  //   const value = nums[i]
  //   const numMap = new Map<number, number>()
  //   for (let k = 0; k < nums.length; k++) {
  //     if (i === k) break
  //     const n = -value - nums[k]
  //     const resultKey = `${value},${n},${nums[k]}`
  //     if (numMap.has(n) && !resultMap.has(resultKey)) resultMap.set(resultKey, [value, n, nums[k]])
  //     else numMap.set(nums[k], i)
  //   }
  // }
  // return Array.from(resultMap.values())

  const result = []
  // n*lgn
  nums.sort((a, b) => a - b)
  for (let index = 0; index < nums.length; index++) {
    // 规避相同相同值，防止重复数组
    if (nums[index] === nums[index - 1]) continue
    // 以 index 为基准，形成左右指针遍历查询
    let leftIndex = index + 1
    let rightIndex = nums.length - 1
    while (leftIndex < rightIndex) {
      if (rightIndex === index) {
        // 如果index 等于 右指针下标，则右指针左移
        rightIndex--
      } else if (nums[index] + nums[leftIndex] + nums[rightIndex] === 0) {
        // 命中条件
        result.push([nums[index], nums[leftIndex], nums[rightIndex]])
        while (nums[leftIndex] === nums[leftIndex + 1]) {
          leftIndex++
        }
        leftIndex++
        while (nums[rightIndex] === nums[rightIndex - 1]) {
          rightIndex--
        }
        rightIndex--
      } else if (nums[index] + nums[leftIndex] + nums[rightIndex] < 0) {
        // 三数之和变小，则左指针右移
        leftIndex++
      } else {
        // 三数之和变大，则右指针左移
        rightIndex--
      }
    }
  }
  return result
}
// threeSum([-1, 0, 1, 2, -1])
threeSum([-1, 0, 1, 2, -1, -1, -1, -4])
