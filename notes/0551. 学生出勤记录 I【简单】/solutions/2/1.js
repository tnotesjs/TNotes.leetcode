/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  // 检查缺勤次数
  const absentCount = (s.match(/A/g) || []).length

  // 检查是否存在连续3次迟到
  const hasThreeLate = s.includes('LLL')

  // 同时满足两个条件
  return absentCount < 2 && !hasThreeLate
}
