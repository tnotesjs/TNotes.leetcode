/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
  // 找到三个字符串的最长公共前缀长度
  const minLen = Math.min(s1.length, s2.length, s3.length)
  let prefixLen = 0
  for (let i = 0; i < minLen; i++) {
    if (s1[i] === s2[i] && s2[i] === s3[i]) {
      prefixLen++
    } else {
      break
    }
  }
  // 如果没有公共前缀，无法使三个字符串相等
  if (prefixLen === 0) return -1

  // 操作次数 = 各字符串需要删除的字符数之和
  const s1Operations = s1.length - prefixLen
  const s2Operations = s2.length - prefixLen
  const s3Operations = s3.length - prefixLen
  return s1Operations + s2Operations + s3Operations
}
