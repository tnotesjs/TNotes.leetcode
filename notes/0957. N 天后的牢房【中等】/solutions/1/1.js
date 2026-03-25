/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
  const next = (state) => {
    const res = new Array(8).fill(0)
    for (let i = 1; i < 7; i++) {
      res[i] = state[i - 1] === state[i + 1] ? 1 : 0
    }
    return res
  }

  const seen = new Map()
  let state = cells
  for (let day = 0; day < n; day++) {
    const key = state.join('')
    if (seen.has(key)) {
      const cycleLen = day - seen.get(key)
      const remaining = (n - day) % cycleLen
      for (let i = 0; i < remaining; i++) state = next(state)
      return state
    }
    seen.set(key, day)
    state = next(state)
  }

  return state
}
