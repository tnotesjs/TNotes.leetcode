/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  const res = new Array(seq.length)
  let depth = 0
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === '(') {
      depth++
      res[i] = depth & 1
    } else {
      res[i] = depth & 1
      depth--
    }
  }
  return res
}
