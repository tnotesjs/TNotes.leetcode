/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  function dfs(node) {
    if (!node) return [null, 0]
    const [left, ld] = dfs(node.left)
    const [right, rd] = dfs(node.right)
    if (ld > rd) return [left, ld + 1]
    if (rd > ld) return [right, rd + 1]
    return [node, ld + 1]
  }
  return dfs(root)[0]
}
