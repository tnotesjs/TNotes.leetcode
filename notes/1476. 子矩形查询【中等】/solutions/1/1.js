/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
  this.rect = rectangle
  this.updates = []
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue,
) {
  this.updates.push([row1, col1, row2, col2, newValue])
}

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  // 从后往前找第一个覆盖当前位置的更新
  for (let i = this.updates.length - 1; i >= 0; i--) {
    const [r1, c1, r2, c2, val] = this.updates[i]
    if (row >= r1 && row <= r2 && col >= c1 && col <= c2) return val
  }
  return this.rect[row][col]
}
