/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = []

  for (const op of operations) {
    switch (op) {
      case '+':
        // 新得分是前两次得分的总和
        stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        break
      case 'D':
        // 新得分是上次得分的两倍
        stack.push(stack[stack.length - 1] * 2)
        break
      case 'C':
        // 撤销上次得分
        stack.pop()
        // 注意：题目说的无效是移除该得分，并不是清零。
        break
      default:
        // 添加整数分数
        stack.push(parseInt(op))
        break
    }
  }

  // 计算所有有效得分的总和
  return stack.reduce((sum, score) => sum + score, 0)
}
