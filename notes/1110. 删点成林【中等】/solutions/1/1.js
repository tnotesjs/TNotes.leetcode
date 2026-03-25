/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const delSet = new Set(to_delete)
  const res = []
  function dfs(node, isRoot) {
    if (!node) return null
    const deleted = delSet.has(node.val)
    if (isRoot && !deleted) res.push(node)
    node.left = dfs(node.left, deleted)
    node.right = dfs(node.right, deleted)
    return deleted ? null : node
  }
  dfs(root, true)
  return res
}
