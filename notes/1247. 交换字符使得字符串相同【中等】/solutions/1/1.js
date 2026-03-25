/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
  let xy = 0,
    yx = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === 'x' && s2[i] === 'y') xy++
    else if (s1[i] === 'y' && s2[i] === 'x') yx++
  }
  if ((xy + yx) % 2 !== 0) return -1
  // xy 对：每两对可以一次交换解决；yx 对同理
  // 剩余各一个 xy 和 yx 需要两次交换
  return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) * 2
}
