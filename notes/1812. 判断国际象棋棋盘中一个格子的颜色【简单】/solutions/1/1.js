/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const col = coordinates.charCodeAt(0) - 96 // 'a' -> 1, 'b' -> 2, ..., 'h' -> 8
  const row = coordinates.charCodeAt(1) - 48 // '1' -> 1, '2' -> 2, ..., '8' -> 8
  return ((col + row) & 1) === 1
}

// 提交于 2026.01.19 20:48
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 54.10MB 击败 100.00%
