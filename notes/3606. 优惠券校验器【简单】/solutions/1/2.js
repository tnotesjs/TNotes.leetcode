/*
 * @lc app=leetcode.cn id=3606 lang=javascript
 *
 * [3606] 优惠券校验器
 */

// @lc code=start
/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
  // 定义有效的业务线及其排序优先级
  const businessLineOrder = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3,
  }

  return (
    code
      // 1. 创建优惠券对象数组
      .map((_, i) => ({
        code: code[i],
        businessLine: businessLine[i],
        isActive: isActive[i],
      }))
      // 2. 过滤出有效的优惠券
      .filter((coupon) => {
        return (
          coupon.isActive &&
          coupon.code.length > 0 &&
          /^[a-zA-Z0-9_]+$/.test(coupon.code) &&
          businessLineOrder.hasOwnProperty(coupon.businessLine)
        )
      })
      // 3. 按要求排序
      .sort((a, b) => {
        // 先按业务线顺序排序
        const orderA = businessLineOrder[a.businessLine]
        const orderB = businessLineOrder[b.businessLine]

        if (orderA !== orderB) {
          return orderA - orderB
        }

        // 同一业务线内按标识符字典序排序
        if (a.code < b.code) return -1
        if (a.code > b.code) return 1
        return 0
        // ! ⚠️ 注意：使用 localeCompare 会有问题
        // return a.code.localeCompare(b.code)
      })
      // 4. 返回优惠券代码
      .map((coupon) => coupon.code)
  )
}
// @lc code=end
const result1 = validateCoupons(
  ['MI', 'b_'],
  ['pharmacy', 'pharmacy'],
  [true, true]
)
console.log(result1)
// 如果使用 a.code.localeCompare(b.code) 来比较，会返回错误的结果 [ 'b_', 'MI' ]
// 正确的结果应该是：[ 'MI', 'b_' ]

// const result2 = validateCoupons(
//   ['Qf8NjqOTYp', 'w4xOTEM20C'],
//   ['pharmacy', 'pharmacy'],
//   [true, true]
// )
// console.log(result2) // [ 'Qf8NjqOTYp', 'w4xOTEM20C' ]
