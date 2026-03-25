/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
  let ans = 0
  const dfs = (node, parent, grandparent) => {
    if (!node) return
    if (grandparent % 2 === 0) ans += node.val
    dfs(node.left, node.val, parent)
    dfs(node.right, node.val, parent)
  }
  dfs(root, 1, 1) // 用奇数初始化避免误算
  return ans
}
