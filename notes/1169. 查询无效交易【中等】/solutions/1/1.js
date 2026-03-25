/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  const parsed = transactions.map((t, i) => {
    const [name, time, amount, city] = t.split(',')
    return { name, time: +time, amount: +amount, city, idx: i }
  })
  const invalid = new Set()
  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i].amount > 1000) invalid.add(i)
    for (let j = i + 1; j < parsed.length; j++) {
      if (
        parsed[i].name === parsed[j].name &&
        parsed[i].city !== parsed[j].city &&
        Math.abs(parsed[i].time - parsed[j].time) <= 60
      ) {
        invalid.add(i)
        invalid.add(j)
      }
    }
  }
  return [...invalid].map((i) => transactions[i])
}
