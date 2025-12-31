/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  const digits = number.replace(/[ \-]/g, '')
  const res = []
  let i = 0
  while (digits.length - i > 4) {
    res.push(digits.slice(i, i + 3))
    i += 3
  }

  const remain = digits.length - i
  if (remain === 4) {
    res.push(digits.slice(i, i + 2))
    res.push(digits.slice(i + 2, i + 4))
  } else {
    res.push(digits.slice(i))
  }

  return res.join('-')
}
