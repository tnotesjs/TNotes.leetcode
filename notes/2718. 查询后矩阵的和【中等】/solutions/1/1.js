var matrixSumQueries = function (n, queries) {
  const rowUsed = new Set(),
    colUsed = new Set()
  let sum = 0
  for (let i = queries.length - 1; i >= 0; i--) {
    const [type, index, val] = queries[i]
    if (type === 0) {
      if (!rowUsed.has(index)) {
        sum += val * (n - colUsed.size)
        rowUsed.add(index)
      }
    } else {
      if (!colUsed.has(index)) {
        sum += val * (n - rowUsed.size)
        colUsed.add(index)
      }
    }
  }
  return sum
}
