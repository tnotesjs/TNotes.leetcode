/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  const sorted = []
  const inorder = (node) => {
    if (!node) return
    inorder(node.left)
    sorted.push(node.val)
    inorder(node.right)
  }
  inorder(root)

  const build = (lo, hi) => {
    if (lo > hi) return null
    const mid = (lo + hi) >> 1
    const node = new TreeNode(sorted[mid])
    node.left = build(lo, mid - 1)
    node.right = build(mid + 1, hi)
    return node
  }
  return build(0, sorted.length - 1)
}
