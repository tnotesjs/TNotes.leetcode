/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  // 1. 使用 flat 将二维数组扁平化
  const allCities = paths.flat()

  // 2. 找到只出现一次的站点
  const onceCities = allCities.filter(
    (city, _, arr) => arr.indexOf(city) === arr.lastIndexOf(city)
  )

  // 3. 判断哪个是终点站（索引为奇数的位置）
  for (let city of onceCities) {
    const index = allCities.indexOf(city)
    if (index % 2 === 1) {
      // 奇数索引表示终点
      return city
    }
  }

  return ''
}
// @lc code=end

destCity([
  ['B', 'C'],
  ['D', 'B'],
  ['C', 'A'],
])
