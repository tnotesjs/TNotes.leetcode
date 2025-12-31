/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let best = ''
  for (let i = 0; i + 2 < num.length; i += 1) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      const cand = num.slice(i, i + 3)
      if (cand > best) best = cand // 固定长度 3，字典序即数值大小
    }
  }
  return best
}
