/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  // 计算格子颜色：(列 + 行) 的奇偶性决定颜色
  const getColor = (coord) => {
    const col = coord.charCodeAt(0)
    const row = coord.charCodeAt(1)
    return (col + row) % 2
  }

  return getColor(coordinate1) === getColor(coordinate2)
}
