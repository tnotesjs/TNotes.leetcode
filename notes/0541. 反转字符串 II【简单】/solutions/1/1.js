/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  // 将字符串转换为数组，便于操作
  const arr = s.split('')
  const n = arr.length

  // 每 2k 个字符为一组进行处理
  for (let i = 0; i < n; i += 2 * k) {
    // 确定需要反转的范围
    let left = i
    let right = Math.min(i + k - 1, n - 1)

    // 反转指定范围内的字符
    while (left < right) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  return arr.join('')
}
