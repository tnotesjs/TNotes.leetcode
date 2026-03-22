/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const syms = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ]

  let ans = ''
  for (let i = 0; i < vals.length; i++) {
    while (num >= vals[i]) {
      ans += syms[i]
      num -= vals[i]
    }
  }
  return ans
}
