/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
  // n = 1 不需要切割
  if (n === 1) return 0

  // n 为偶数，每次经过圆心的切割产生 2 份，需要 n/2 次
  // n 为奇数，需要 n 次从圆心到圆上的切割
  return n % 2 === 0 ? n / 2 : n
}
// 2026.01.18 08:51
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 54.16MB 击败 100.00%
