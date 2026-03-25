/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  const n = customers.length
  let base = 0
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) base += customers[i]
  }
  let extra = 0
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) extra += customers[i]
  }
  let maxExtra = extra
  for (let i = minutes; i < n; i++) {
    if (grumpy[i] === 1) extra += customers[i]
    if (grumpy[i - minutes] === 1) extra -= customers[i - minutes]
    maxExtra = Math.max(maxExtra, extra)
  }
  return base + maxExtra
}
