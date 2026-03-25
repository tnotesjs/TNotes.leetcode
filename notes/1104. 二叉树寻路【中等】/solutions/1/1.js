/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let level = 1
  while (1 << level <= label) level++
  const res = []
  while (label >= 1) {
    res.push(label)
    // mirror position at current level, then go to parent
    const levelStart = 1 << (level - 1)
    const levelEnd = (1 << level) - 1
    label = Math.floor((levelStart + levelEnd - label) / 2)
    level--
  }
  return res.reverse()
}
