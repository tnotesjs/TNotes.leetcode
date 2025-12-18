/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let l = 0
  let r = letters.length - 1

  // 二分查找：找到第一个严格大于 target 的位置
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (letters[mid] <= target) {
      // 当前字符 <= target，说明目标在右侧
      l = mid + 1
    } else {
      // 当前字符 > target，可能是答案，继续向左查找更小的
      r = mid - 1
    }
  }

  // l 最终指向第一个 > target 的位置
  // 如果 l 越界（等于 letters.length），说明没有更大的字符
  // 使用取模运算实现循环返回
  return letters[l % letters.length]
}
