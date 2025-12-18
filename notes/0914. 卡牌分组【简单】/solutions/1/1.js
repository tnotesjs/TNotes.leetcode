/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  // 边界条件
  if (deck.length < 2) return false

  // 步骤1：统计每个数字的出现次数
  const cnt = new Map()
  for (const x of deck) {
    cnt.set(x, (cnt.get(x) || 0) + 1)
  }

  const counts = Array.from(cnt.values())
  const minCount = Math.min(...counts)

  // 步骤2：如果最小出现次数 < 2，肯定无法分组
  if (minCount < 2) return false

  // 步骤3：枚举所有可能的分组大小 X（从2到minCount）
  for (let X = 2; X <= minCount; X++) {
    let canDivide = true

    // 检查每个数字的数量是否能被X整除
    for (const c of counts) {
      if (c % X !== 0) {
        canDivide = false
        break
      }
    }

    if (canDivide) {
      return true // 找到了合适的分组大小
    }
  }

  return false // 没有找到合适的分组大小
}
