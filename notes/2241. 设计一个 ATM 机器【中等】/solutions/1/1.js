var ATM = function () {
  this.counts = [0, 0, 0, 0, 0]
  this.denoms = [20, 50, 100, 200, 500]
}

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function (banknotesCount) {
  for (let i = 0; i < 5; i++) {
    this.counts[i] += banknotesCount[i]
  }
}

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function (amount) {
  const take = [0, 0, 0, 0, 0]
  let remain = amount
  for (let i = 4; i >= 0; i--) {
    take[i] = Math.min(this.counts[i], Math.floor(remain / this.denoms[i]))
    remain -= take[i] * this.denoms[i]
  }
  if (remain > 0) return [-1]
  for (let i = 0; i < 5; i++) this.counts[i] -= take[i]
  return take
}
