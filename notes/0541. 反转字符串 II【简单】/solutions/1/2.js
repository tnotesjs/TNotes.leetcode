/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let result = ''

  for (let i = 0; i < s.length; i += 2 * k) {
    // 取出当前组
    const group = s.substring(i, i + 2 * k)

    // 反转前k个字符
    const toReverse = group.substring(0, k).split('').reverse().join('')

    // 拼接结果：反转部分 + 剩余部分
    result += toReverse + group.substring(k)
  }

  return result
}
