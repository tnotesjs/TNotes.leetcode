/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0

  for (let num = low; num <= high; num++) {
    const str = String(num)
    const len = str.length

    // 必须是偶数位
    if (len % 2 !== 0) continue

    const mid = len / 2
    let leftSum = 0,
      rightSum = 0

    // 计算前半部分和后半部分的数字和
    for (let i = 0; i < mid; i++) {
      leftSum += Number(str[i])
      rightSum += Number(str[mid + i])
    }

    if (leftSum === rightSum) {
      count++
    }
  }

  return count
}
