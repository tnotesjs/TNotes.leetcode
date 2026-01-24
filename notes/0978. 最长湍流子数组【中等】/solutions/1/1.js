/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  const n = arr.length
  if (n <= 1) return n

  let maxLen = 1
  let len = 1 // 当前湍流子数组长度
  let prevCmp = 0 // 前一个比较结果：1表示>，-1表示<，0表示=

  for (let i = 1; i < n; i++) {
    const cmp = Math.sign(arr[i] - arr[i - 1])

    if (cmp === 0) {
      // 相等，重置长度
      len = 1
      prevCmp = 0
    } else if (prevCmp === 0 || prevCmp + cmp === 0) {
      // prevCmp === 0: 刚开始或刚重置
      // prevCmp + cmp === 0: 比较符号翻转（1 + (-1) = 0 或 -1 + 1 = 0）
      len++
      prevCmp = cmp
    } else {
      // 比较符号没有翻转，从当前位置重新开始
      len = 2
      prevCmp = cmp
    }

    maxLen = Math.max(maxLen, len)
  }

  return maxLen
}
