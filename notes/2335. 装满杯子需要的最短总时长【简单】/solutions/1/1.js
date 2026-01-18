/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  amount.sort((a, b) => a - b)
  const [a, b, c] = amount

  // 如果最大值大于等于另外两个之和,则需要 c 秒(一次装一杯)
  // 否则每次尽量装两杯不同的,需要 ceil((a+b+c)/2) 秒
  if (c >= a + b) {
    return c
  }
  return Math.ceil((a + b + c) / 2)
}
