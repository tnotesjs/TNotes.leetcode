/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
  const n = arr.length
  if (m === n) return n
  const len = new Array(n + 2).fill(0) // len[i]: 位置 i 所属连续 1 段的长度（存在两端）
  let res = -1
  for (let step = 0; step < n; step++) {
    const pos = arr[step]
    const leftLen = len[pos - 1]
    const rightLen = len[pos + 1]
    const newLen = leftLen + rightLen + 1
    len[pos - leftLen] = newLen
    len[pos + rightLen] = newLen
    if (leftLen === m || rightLen === m) res = step
  }
  return res
}
