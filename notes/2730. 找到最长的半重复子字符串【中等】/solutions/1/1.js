var longestSemiRepetitiveSubstring = function (s) {
  const n = s.length
  let left = 0,
    res = 1,
    count = 0
  for (let right = 1; right < n; right++) {
    if (s[right] === s[right - 1]) count++
    while (count > 1) {
      left++
      if (s[left] === s[left - 1]) count--
    }
    res = Math.max(res, right - left + 1)
  }
  return res
}
