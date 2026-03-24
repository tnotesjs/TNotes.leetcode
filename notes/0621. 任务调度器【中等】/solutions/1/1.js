/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const cnt = new Array(26).fill(0)
  for (const t of tasks) cnt[t.charCodeAt(0) - 65]++
  const maxCnt = Math.max(...cnt)
  const maxNum = cnt.filter((c) => c === maxCnt).length
  return Math.max(tasks.length, (maxCnt - 1) * (n + 1) + maxNum)
}
