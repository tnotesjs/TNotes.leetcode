/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  const str = s.slice(1, -1)
  const res = []
  for (let i = 1; i < str.length; i++) {
    const left = valid(str.slice(0, i))
    const right = valid(str.slice(i))
    for (const l of left) for (const r of right) res.push(`(${l}, ${r})`)
  }
  return res
}

function valid(s) {
  const res = []
  if (s === '0' || s[0] !== '0') res.push(s)
  for (let i = 1; i < s.length; i++) {
    const left = s.slice(0, i),
      right = s.slice(i)
    if ((left.length > 1 && left[0] === '0') || right[right.length - 1] === '0')
      continue
    res.push(left + '.' + right)
  }
  return res
}
