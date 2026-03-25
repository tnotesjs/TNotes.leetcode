/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
  const n = candiesCount.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + candiesCount[i]
  return queries.map(([type, day, cap]) => {
    // 最少吃: 每天只吃 1 颗, day+1 天后吃到第 day+1 颗
    // 最多吃: 每天吃 cap 颗, day+1 天后吃到第 (day+1)*cap 颗
    const minEat = day + 1
    const maxEat = (day + 1) * cap
    // 第 type 种糖果的范围: (prefix[type], prefix[type+1]]
    return maxEat > prefix[type] && minEat <= prefix[type + 1]
  })
}
