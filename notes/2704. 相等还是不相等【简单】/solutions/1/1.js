var expect = function (val) {
  return {
    toBe(newVal) {
      if (newVal === val) return true
      else throw new Error('Not Equal')
    },
    notToBe(newVal) {
      if (newVal !== val) return true
      else throw new Error('Equal')
    },
  }
}
