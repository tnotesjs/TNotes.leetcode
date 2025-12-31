/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let ans = 0
  const target = tickets[k]

  for (let i = 0; i < tickets.length; i += 1) {
    if (i <= k) {
      ans += Math.min(tickets[i], target)
    } else {
      ans += Math.min(tickets[i], target - 1)
    }
  }

  return ans
}
