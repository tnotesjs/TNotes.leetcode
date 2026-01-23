/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  // 使用位掩码记录26个字母的出现情况，每一位代表一个字母
  let mask = 0

  for (let i = 0; i < sentence.length; i += 1) {
    const bit = sentence.charCodeAt(i) - 97 // 'a'
    mask |= 1 << bit

    // 遍历过程中如果 mask 已达到目标值，直接返回 true
    if (mask === 0x3ffffff) return true
  }

  // mask 前 26 位都是 1，对应的十六进制是 0x3ffffff
  return mask === 0x3ffffff
}
