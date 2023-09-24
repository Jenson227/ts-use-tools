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
  nums.sort((a, b) => a - b)
  const resultMap = new Map<string, number[]>()
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    const numMap = new Map<number, number>()
    for (let k = 0; k < nums.length; k++) {
      if (i === k) break
      const n = -value - nums[k]
      const resultKey = `${value},${n},${nums[k]}`
      if (numMap.has(n) && !resultMap.has(resultKey)) resultMap.set(resultKey, [value, n, nums[k]])
      else numMap.set(nums[k], i)
    }
  }
  console.log(resultMap)
  return Array.from(resultMap.values())
}
// threeSum([-1, 0, 1, 2, -1])
threeSum([-1, 0, 1, 2, -1, -4])
