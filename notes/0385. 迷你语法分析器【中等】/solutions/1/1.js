/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if (s[0] !== '[') return new NestedInteger(parseInt(s))
  const stack = []
  let num = '',
    hasNum = false
  for (const ch of s) {
    if (ch === '[') {
      stack.push(new NestedInteger())
    } else if (ch === ']') {
      if (hasNum) {
        stack[stack.length - 1].add(new NestedInteger(parseInt(num)))
        num = ''
        hasNum = false
      }
      if (stack.length > 1) {
        const top = stack.pop()
        stack[stack.length - 1].add(top)
      }
    } else if (ch === ',') {
      if (hasNum) {
        stack[stack.length - 1].add(new NestedInteger(parseInt(num)))
        num = ''
        hasNum = false
      }
    } else {
      num += ch
      hasNum = true
    }
  }
  return stack[0]
}
