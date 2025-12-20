/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  // 逐字符构造，遇到 '.' 替换为 '[.]'
  let res = ''
  for (let i = 0; i < address.length; i++) {
    const ch = address[i]
    res += ch === '.' ? '[.]' : ch
  }
  return res
}
