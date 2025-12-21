/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  const [a, b, c] = nums.sort((x, y) => x - y)
  // 先判断是否能构成三角形：两边之和大于第三边
  if (a + b <= c) {
    return 'none'
  }
  // 判断三角形类型
  if (a === b && b === c) {
    return 'equilateral' // 等边三角形
  }
  if (a === b || b === c) {
    return 'isosceles' // 等腰三角形
  }
  return 'scalene' // 不等边三角形
}
