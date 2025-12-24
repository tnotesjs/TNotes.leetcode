/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // 统计每个人被相信的次数和相信的次数
  const trustCount = new Array(n + 1).fill(0)
  const distrustCount = new Array(n + 1).fill(0)

  for (let [a, b] of trust) {
    distrustCount[a]++ // a 相信了一个人
    trustCount[b]++ // b 被相信了一次
  }

  // 法官是被所有其他 n-1 个人都相信的人，且自己不相信任何人
  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === n - 1 && distrustCount[i] === 0) {
      return i
    }
  }

  // 如果没有法官，返回 -1
  return -1
}
