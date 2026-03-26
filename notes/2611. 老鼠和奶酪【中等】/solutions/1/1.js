/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  const n = reward1.length
  const ids = Array.from({ length: n }, (_, i) => i)
  // 按 reward1[i] - reward2[i] 降序排列
  ids.sort((a, b) => reward1[b] - reward2[b] - (reward1[a] - reward2[a]))
  let ans = 0
  for (let i = 0; i < n; i++) {
    ans += i < k ? reward1[ids[i]] : reward2[ids[i]]
  }
  return ans
}
