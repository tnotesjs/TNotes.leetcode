/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  return title
    .split(' ')
    .map((w) => {
      const lower = w.toLowerCase()
      if (lower.length <= 2) return lower
      return lower[0].toUpperCase() + lower.slice(1)
    })
    .join(' ')
}
