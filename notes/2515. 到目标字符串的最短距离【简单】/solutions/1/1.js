/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function (words, target, startIndex) {
  const n = words.length
  let minDist = Infinity

  // 遍历数组,找到所有等于 target 的位置
  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      // 计算环形数组中的最短距离
      // 向右距离:(i - startIndex + n) % n
      // 向左距离:(startIndex - i + n) % n
      const rightDist = (i - startIndex + n) % n
      const leftDist = (startIndex - i + n) % n
      minDist = Math.min(minDist, rightDist, leftDist)
    }
  }

  return minDist === Infinity ? -1 : minDist
}
