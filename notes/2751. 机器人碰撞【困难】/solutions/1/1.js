/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const n = positions.length
  const idx = Array.from({ length: n }, (_, i) => i)
  idx.sort((a, b) => positions[a] - positions[b])
  const stack = [] // 向右移动的机器人索引
  for (const i of idx) {
    if (directions[i] === 'R') {
      stack.push(i)
      continue
    }
    // 向左，与栈中向右的碰撞
    while (stack.length > 0 && healths[i] > 0) {
      const top = stack[stack.length - 1]
      if (healths[top] < healths[i]) {
        stack.pop()
        healths[top] = 0
        healths[i]--
      } else if (healths[top] > healths[i]) {
        healths[top]--
        healths[i] = 0
      } else {
        stack.pop()
        healths[top] = 0
        healths[i] = 0
      }
    }
  }
  return healths.filter((h) => h > 0)
}
