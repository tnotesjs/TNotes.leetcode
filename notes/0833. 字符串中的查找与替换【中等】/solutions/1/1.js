/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const ops = indices.map((idx, i) => [idx, sources[i], targets[i]])
  ops.sort((a, b) => b[0] - a[0])
  let res = s
  for (const [idx, src, tgt] of ops) {
    if (res.slice(idx, idx + src.length) === src)
      res = res.slice(0, idx) + tgt + res.slice(idx + src.length)
  }
  return res
}
