/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  let maxCount = 0
  let prev = -1 // 记录上一个非0位置的索引

  for (let i = 0; i < forts.length; i++) {
    if (forts[i] !== 0) {
      // 如果当前位置和上一个非0位置的值不同(一个是1,一个是-1)
      // 那么中间的0就是可以摧毁的敌人城堡
      if (prev !== -1 && forts[i] !== forts[prev]) {
        maxCount = Math.max(maxCount, i - prev - 1)
      }
      prev = i
    }
  }

  return maxCount
}
