/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
  const n = arr.length
  const res = new Array(n).fill(0)
  const map = new Map() // val -> [indices]
  for (let i = 0; i < n; i++) {
    if (!map.has(arr[i])) map.set(arr[i], [])
    map.get(arr[i]).push(i)
  }
  for (const indices of map.values()) {
    const m = indices.length
    // 前缀和从左到右
    let prefixSum = 0
    for (let k = 0; k < m; k++) {
      // 左侧有 k 个元素，距离之和 = indices[k]*k - prefixSum
      res[indices[k]] += indices[k] * k - prefixSum
      prefixSum += indices[k]
    }
    // 后缀和从右到左
    let suffixSum = 0
    for (let k = m - 1; k >= 0; k--) {
      res[indices[k]] += suffixSum - indices[k] * (m - 1 - k)
      suffixSum += indices[k]
    }
  }
  return res
}
