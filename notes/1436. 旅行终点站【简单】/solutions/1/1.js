/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  // 将所有路线的起点城市添加到 Set 中
  const startCities = new Set()
  for (let path of paths) {
    startCities.add(path[0])
  }

  // 找终点城市（终点城市线路中的终点不会在起点城市集合中）
  for (let path of paths) {
    if (!startCities.has(path[1])) {
      return path[1]
    }
  }

  return '' // 理论上不会执行到这里
}
