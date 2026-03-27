/**
 * @param {string} s
 * @param {string[]} words
 * @return {string[]}
 */
var shortestSubstringQueries = function(arr) {
  // 不对, 重新审题 - 这是 3076 数组中的最短非公共子字符串
  // 给定字符串数组 arr, 对每个 arr[i], 找到最短的子串使其不是其他任何 arr[j] 的子串
}

// 重写
var shortestSubstrings = function(arr) {
  const n = arr.length
  const res = []
  for (let i = 0; i < n; i++) {
    let best = ""
    for (let len = 1; len <= arr[i].length; len++) {
      for (let start = 0; start + len <= arr[i].length; start++) {
        const sub = arr[i].substring(start, start + len)
        let found = false
        for (let j = 0; j < n; j++) {
          if (j !== i && arr[j].includes(sub)) { found = true; break }
        }
        if (!found) {
          if (best === "" || sub.length < best.length || (sub.length === best.length && sub < best)) {
            best = sub
          }
        }
      }
      if (best !== "") break
    }
    res.push(best)
  }
  return res
}
