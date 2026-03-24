/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const stack = [] // 存储每层路径长度
  let maxLen = 0
  for (const line of input.split('\n')) {
    const depth = line.lastIndexOf('\t') + 1
    const name = line.slice(depth)
    while (stack.length > depth) stack.pop()
    const curLen =
      (stack.length > 0 ? stack[stack.length - 1] + 1 : 0) + name.length
    if (name.includes('.')) maxLen = Math.max(maxLen, curLen)
    stack.push(curLen)
  }
  return maxLen
}
