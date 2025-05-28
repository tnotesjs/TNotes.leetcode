/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function (times) {
  // 归 - base case
  if (times === 0) return ''
  if (times === 1) return this

  // 递 - divide and conquer
  let half = Math.floor(times / 2)
  let halfReplicated = this.replicate(half)

  // 合并结果
  return halfReplicated + halfReplicated + (times % 2 === 0 ? '' : this)
}