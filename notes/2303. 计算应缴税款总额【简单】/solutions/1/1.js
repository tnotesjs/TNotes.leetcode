/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let tax = 0
  let prev = 0

  for (const [upper, percent] of brackets) {
    // 计算当前税级应纳税收入
    const taxable = Math.min(income, upper) - prev
    // 累加税款
    tax += taxable * (percent / 100)
    // 更新上一税级上限
    prev = upper
    // 收入已全部计税
    if (income <= upper) break
  }

  return tax
}
