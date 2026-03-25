/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  let j = 0

  for (const x of pushed) {
    stack.push(x)
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
  }

  return stack.length === 0
}
