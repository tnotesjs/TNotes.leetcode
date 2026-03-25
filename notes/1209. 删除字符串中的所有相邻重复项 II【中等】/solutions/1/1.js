/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [] // [char, count]
  for (const c of s) {
    if (stack.length && stack[stack.length - 1][0] === c) {
      stack[stack.length - 1][1]++
      if (stack[stack.length - 1][1] === k) stack.pop()
    } else {
      stack.push([c, 1])
    }
  }
  return stack.map(([c, n]) => c.repeat(n)).join('')
}
