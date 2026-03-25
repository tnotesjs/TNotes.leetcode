/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let idx = 0
  const build = (lower, upper) => {
    if (idx === preorder.length) return null
    const val = preorder[idx]
    if (val < lower || val > upper) return null
    idx++
    const node = new TreeNode(val)
    node.left = build(lower, val)
    node.right = build(val, upper)
    return node
  }
  return build(-Infinity, Infinity)
}
