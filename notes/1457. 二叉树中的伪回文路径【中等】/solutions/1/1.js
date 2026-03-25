/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  let count = 0
  const dfs = (node, mask) => {
    if (!node) return
    mask ^= 1 << node.val
    if (!node.left && !node.right) {
      if ((mask & (mask - 1)) === 0) count++
      return
    }
    dfs(node.left, mask)
    dfs(node.right, mask)
  }
  dfs(root, 0)
  return count
}
