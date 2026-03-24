/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const count = new Array(26).fill(0)
  for (const ch of s) count[ch.charCodeAt(0) - 97]++
  const out = new Array(10).fill(0)
  // 唯一字母确定
  out[0] = count['z'.charCodeAt(0) - 97] // zero
  out[2] = count['w'.charCodeAt(0) - 97] // two
  out[4] = count['u'.charCodeAt(0) - 97] // four
  out[6] = count['x'.charCodeAt(0) - 97] // six
  out[8] = count['g'.charCodeAt(0) - 97] // eight
  out[3] = count['h'.charCodeAt(0) - 97] - out[8] // three
  out[5] = count['f'.charCodeAt(0) - 97] - out[4] // five
  out[7] = count['s'.charCodeAt(0) - 97] - out[6] // seven
  out[1] = count['o'.charCodeAt(0) - 97] - out[0] - out[2] - out[4] // one
  out[9] = count['i'.charCodeAt(0) - 97] - out[5] - out[6] - out[8] // nine
  let res = ''
  for (let i = 0; i <= 9; i++) res += String(i).repeat(out[i])
  return res
}
