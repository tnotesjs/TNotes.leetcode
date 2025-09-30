/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length
  let sum = 0 // 实际数组的和
  let squareSum = 0 // 实际数组的平方和
  let expectedSum = (n * (n + 1)) / 2 // 理论上数组的和
  let expectedSquareSum = (n * (n + 1) * (2 * n + 1)) / 6 // 理论上数组的平方和

  // 计算实际数组的和与平方和
  for (const num of nums) {
    sum += num
    squareSum += num * num
  }

  // diff = missing - duplicate
  let diff = expectedSum - sum
  // squareDiff = missing^2 - duplicate^2
  let squareDiff = expectedSquareSum - squareSum

  // missing + duplicate = squareDiff / diff
  let sumDiff = squareDiff / diff

  // 解方程得到结果
  let missing = (diff + sumDiff) / 2
  let duplicate = missing - diff

  return [duplicate, missing]
}
