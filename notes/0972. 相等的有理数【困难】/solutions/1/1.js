/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isRationalEqual = function (s, t) {
  // 将有理数字符串转换为分数 [分子, 分母]
  const toFraction = (str) => {
    const parts = str.split('.')
    const intPart = parts[0] || '0'
    const decPart = parts[1] || ''

    // 查找循环部分
    const repeatStart = decPart.indexOf('(')
    let nonRepeat = ''
    let repeat = ''

    if (repeatStart !== -1) {
      nonRepeat = decPart.substring(0, repeatStart)
      repeat = decPart.substring(repeatStart + 1, decPart.length - 1)
    } else {
      nonRepeat = decPart
    }

    // 构建分子和分母
    // 对于 0.1(6): 整数部分 0, 非循环 1, 循环 6
    // 分子 = 016 - 01 = 16 - 1 = 15
    // 分母 = 990 (循环部分1位,非循环1位)
    let numerator = BigInt(intPart + nonRepeat + repeat || '0')
    let denominator = BigInt(1)

    if (repeat) {
      // 有循环部分
      const nonRepeatNum = BigInt(intPart + nonRepeat || '0')
      numerator = numerator - nonRepeatNum
      // 分母: 循环部分长度个9 + 非循环部分长度个0
      denominator = BigInt(
        '9'.repeat(repeat.length) + '0'.repeat(nonRepeat.length),
      )
    } else {
      // 无循环部分，纯小数
      numerator = BigInt(intPart + nonRepeat || '0')
      denominator = BigInt('1' + '0'.repeat(nonRepeat.length))
    }

    // 化简分数
    const g = gcd(numerator, denominator)
    return [numerator / g, denominator / g]
  }

  // 最大公约数
  const gcd = (a, b) => {
    a = a < 0n ? -a : a
    b = b < 0n ? -b : b
    while (b !== 0n) {
      const temp = b
      b = a % b
      a = temp
    }
    return a
  }

  const [n1, d1] = toFraction(s)
  const [n2, d2] = toFraction(t)

  // 比较两个分数是否相等: n1/d1 = n2/d2 => n1*d2 = n2*d1
  return n1 * d2 === n2 * d1
}

// Tdahuyou 提交于 2026.01.24 07:51
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 54.34MB 击败 100.00%
