var accountBalanceAfterPurchase = function (purchaseAmount) {
  const total = 100
  const base = 10
  if (purchaseAmount < base / 2) return 100
  const x1 = Math.trunc(purchaseAmount / base)
  const x2 = Math.trunc((purchaseAmount - base / 2) / base)
  if (x1 === x2) return total - (x1 + 1) * base
  else return total - Math.max(x1, x2) * base
}