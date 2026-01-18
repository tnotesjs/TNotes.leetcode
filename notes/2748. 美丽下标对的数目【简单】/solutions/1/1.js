/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  // 计算最大公约数
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

  // 获取第一个数字
  const getFirst = (num) => {
    while (num >= 10) num = Math.floor(num / 10)
    return num
  }

  // 获取最后一个数字
  const getLast = (num) => num % 10

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const first = getFirst(nums[i])
      const last = getLast(nums[j])
      if (gcd(first, last) === 1) {
        count++
      }
    }
  }

  return count
}
