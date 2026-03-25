/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  let res = 0
  const dfs = (node, minVal, maxVal) => {
    if (!node) return
    res = Math.max(
      res,
      Math.abs(node.val - minVal),
      Math.abs(node.val - maxVal),
    )
    const newMin = Math.min(minVal, node.val)
    const newMax = Math.max(maxVal, node.val)
    dfs(node.left, newMin, newMax)
    dfs(node.right, newMin, newMax)
  }
  dfs(root, root.val, root.val)
  return res
}
