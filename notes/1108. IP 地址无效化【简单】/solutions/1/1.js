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

// 也可以直接使用内置的 replace 方法直接全局替换
/* 
var defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]')
}
*/
