/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const n = boxes.length
  const ans = new Array(n).fill(0)
  // 从左到右扫描
  let count = 0,
    ops = 0
  for (let i = 0; i < n; i++) {
    ans[i] += ops
    count += boxes[i] === '1' ? 1 : 0
    ops += count
  }
  // 从右到左扫描
  count = 0
  ops = 0
  for (let i = n - 1; i >= 0; i--) {
    ans[i] += ops
    count += boxes[i] === '1' ? 1 : 0
    ops += count
  }
  return ans
}
