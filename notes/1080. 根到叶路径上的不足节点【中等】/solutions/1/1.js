/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
  function dfs(node, sum) {
    if (!node) return null
    sum += node.val
    if (!node.left && !node.right) {
      return sum < limit ? null : node
    }
    node.left = dfs(node.left, sum)
    node.right = dfs(node.right, sum)
    return !node.left && !node.right ? null : node
  }
  return dfs(root, 0)
}
