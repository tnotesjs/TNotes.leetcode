/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  this.times = times
  this.leaders = []
  const votes = new Map()
  let lead = -1
  for (let i = 0; i < persons.length; i++) {
    votes.set(persons[i], (votes.get(persons[i]) || 0) + 1)
    if (votes.get(persons[i]) >= (votes.get(lead) || 0)) lead = persons[i]
    this.leaders.push(lead)
  }
}

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  let lo = 0,
    hi = this.times.length - 1
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    if (this.times[mid] <= t) lo = mid
    else hi = mid - 1
  }
  return this.leaders[lo]
}
