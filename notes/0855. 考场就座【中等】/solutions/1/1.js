/**
 * @param {number} n
 */
var ExamRoom = function (n) {
  this.n = n
  this.seats = []
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
  if (this.seats.length === 0) {
    this.seats.push(0)
    return 0
  }
  let maxDist = this.seats[0],
    best = 0
  for (let i = 1; i < this.seats.length; i++) {
    const d = Math.floor((this.seats[i] - this.seats[i - 1]) / 2)
    if (d > maxDist) {
      maxDist = d
      best = this.seats[i - 1] + d
    }
  }
  if (this.n - 1 - this.seats[this.seats.length - 1] > maxDist)
    best = this.n - 1
  const idx = this.seats.findIndex((s) => s > best)
  if (idx === -1) this.seats.push(best)
  else this.seats.splice(idx, 0, best)
  return best
}

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  const idx = this.seats.indexOf(p)
  this.seats.splice(idx, 1)
}
