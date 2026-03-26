var FrequencyTracker = function () {
  this.numCount = new Map()
  this.freqCount = new Map()
}

FrequencyTracker.prototype.add = function (number) {
  const oldFreq = this.numCount.get(number) || 0
  if (oldFreq > 0) {
    this.freqCount.set(oldFreq, (this.freqCount.get(oldFreq) || 0) - 1)
    if (this.freqCount.get(oldFreq) === 0) this.freqCount.delete(oldFreq)
  }
  const newFreq = oldFreq + 1
  this.numCount.set(number, newFreq)
  this.freqCount.set(newFreq, (this.freqCount.get(newFreq) || 0) + 1)
}

FrequencyTracker.prototype.deleteOne = function (number) {
  const oldFreq = this.numCount.get(number) || 0
  if (oldFreq === 0) return
  this.freqCount.set(oldFreq, (this.freqCount.get(oldFreq) || 0) - 1)
  if (this.freqCount.get(oldFreq) === 0) this.freqCount.delete(oldFreq)
  const newFreq = oldFreq - 1
  if (newFreq > 0) {
    this.numCount.set(number, newFreq)
    this.freqCount.set(newFreq, (this.freqCount.get(newFreq) || 0) + 1)
  } else {
    this.numCount.delete(number)
  }
}

FrequencyTracker.prototype.hasFrequency = function (frequency) {
  return (this.freqCount.get(frequency) || 0) > 0
}
