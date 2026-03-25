/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const letterLogs = []
  const digitLogs = []

  for (const log of logs) {
    const idx = log.indexOf(' ')
    if (log[idx + 1] >= '0' && log[idx + 1] <= '9') {
      digitLogs.push(log)
    } else {
      letterLogs.push(log)
    }
  }

  letterLogs.sort((a, b) => {
    const ca = a.slice(a.indexOf(' ') + 1)
    const cb = b.slice(b.indexOf(' ') + 1)
    if (ca === cb) {
      return a
        .slice(0, a.indexOf(' '))
        .localeCompare(b.slice(0, b.indexOf(' ')))
    }
    return ca.localeCompare(cb)
  })

  return [...letterLogs, ...digitLogs]
}
