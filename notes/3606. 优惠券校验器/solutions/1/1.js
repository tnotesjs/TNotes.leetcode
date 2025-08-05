/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
  // 定义有效的业务线及其排序优先级
  const validBusinessLines = [
    'electronics',
    'grocery',
    'pharmacy',
    'restaurant',
  ]

  return (
    code
      // 1. 过滤出有效的优惠券
      .map((_, i) => [code[i], businessLine[i], isActive[i]])
      .filter(([codeItem, businessLineItem, isActiveItem]) => {
        if (
          !isActiveItem || // 检查优惠券是否激活
          codeItem.length === 0 || // 检查优惠券标识符是否为空
          !/^[a-zA-Z0-9_]+$/.test(codeItem) || // 检查优惠券标识符是否含有非法字符
          !validBusinessLines.includes(businessLineItem) // 检查业务线是否合法
        ) {
          return false
        } else {
          return true
        }
      })
      // 2. 按要求排序
      .sort(([codeA, businessLineA], [codeB, businessLineB]) => {
        // 先按业务线顺序排序
        const indexA = validBusinessLines.indexOf(businessLineA)
        const indexB = validBusinessLines.indexOf(businessLineB)

        if (indexA !== indexB) {
          return indexA - indexB
        }

        // 同一业务线内按标识符字典序升序排序
        if (codeA < codeB) return -1
        if (codeA > codeB) return 1
        return 0
      })
      // 3. 返回优惠券代码
      .map(([codeItem]) => codeItem)
  )
}
