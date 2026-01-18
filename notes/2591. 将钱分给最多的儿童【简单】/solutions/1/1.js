/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  // 每个孩子至少需要1美元，检查钱是否够
  if (money < children) return -1

  // 先给每个孩子分配1美元
  money -= children

  // 计算最多有多少孩子可以再获得7美元（总共8美元）
  const maxEightDollarChildren = Math.floor(money / 7)

  // 如果所有孩子都能获得8美元且还有剩余，说明无法分配
  if (maxEightDollarChildren === children && money % 7 > 0) {
    return children - 1
  }

  // 如果能获得8美元的孩子数超过总数，最多只能是children个
  if (maxEightDollarChildren > children) {
    return children - 1
  }

  // 检查剩余的钱和孩子
  const remainingMoney = money - maxEightDollarChildren * 7
  const remainingChildren = children - maxEightDollarChildren

  // 如果只剩1个孩子且剩余钱是3美元（1+3=4美元），需要调整
  if (remainingChildren === 1 && remainingMoney === 3) {
    return maxEightDollarChildren - 1
  }

  return maxEightDollarChildren
}
