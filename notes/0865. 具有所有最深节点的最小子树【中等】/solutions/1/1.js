/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
  const dfs = (node) => {
    if (!node) return [null, 0]
    const [lNode, lDepth] = dfs(node.left)
    const [rNode, rDepth] = dfs(node.right)
    if (lDepth > rDepth) return [lNode, lDepth + 1]
    if (rDepth > lDepth) return [rNode, rDepth + 1]
    return [node, lDepth + 1]
  }
  return dfs(root)[0]
}
