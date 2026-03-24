/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const rank = new Array(26).fill(26)
  for (let i = 0; i < order.length; i++) rank[order.charCodeAt(i) - 97] = i
  return [...s]
    .sort((a, b) => rank[a.charCodeAt(0) - 97] - rank[b.charCodeAt(0) - 97])
    .join('')
}
