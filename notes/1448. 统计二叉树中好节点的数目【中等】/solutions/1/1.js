/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let count = 0
  const dfs = (node, maxVal) => {
    if (!node) return
    if (node.val >= maxVal) count++
    const newMax = Math.max(maxVal, node.val)
    dfs(node.left, newMax)
    dfs(node.right, newMax)
  }
  dfs(root, -Infinity)
  return count
}
