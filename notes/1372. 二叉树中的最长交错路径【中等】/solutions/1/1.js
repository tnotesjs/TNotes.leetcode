/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  let ans = 0
  const dfs = (node) => {
    if (!node) return [-1, -1] // [leftLen, rightLen]
    const [ll, lr] = dfs(node.left)
    const [rl, rr] = dfs(node.right)
    const left = lr + 1 // 向左走，前一步必须是向右
    const right = rl + 1 // 向右走，前一步必须是向左
    ans = Math.max(ans, left, right)
    return [left, right]
  }
  dfs(root)
  return ans
}
