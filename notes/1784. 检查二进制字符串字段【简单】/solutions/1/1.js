/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  // 如果包含 '01' 子串，说明 '0' 后面还有 '1'，即存在多个 '1' 字段
  return !s.includes('01')
}
