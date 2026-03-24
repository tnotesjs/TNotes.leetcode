/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let write = 0,
    i = 0
  while (i < chars.length) {
    let j = i
    while (j < chars.length && chars[j] === chars[i]) j++
    chars[write++] = chars[i]
    const count = j - i
    if (count > 1) {
      for (const ch of String(count)) chars[write++] = ch
    }
    i = j
  }
  return write
}
