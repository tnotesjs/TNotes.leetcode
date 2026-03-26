/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  items.sort((a, b) => a[0] - b[0])
  // 维护前缀最大美丽值
  for (let i = 1; i < items.length; i++) {
    items[i][1] = Math.max(items[i][1], items[i - 1][1])
  }
  const ans = new Array(queries.length)
  for (let i = 0; i < queries.length; i++) {
    // 二分查找 price <= queries[i] 的最后一个
    let lo = 0,
      hi = items.length - 1,
      pos = -1
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (items[mid][0] <= queries[i]) {
        pos = mid
        lo = mid + 1
      } else hi = mid - 1
    }
    ans[i] = pos >= 0 ? items[pos][1] : 0
  }
  return ans
}
