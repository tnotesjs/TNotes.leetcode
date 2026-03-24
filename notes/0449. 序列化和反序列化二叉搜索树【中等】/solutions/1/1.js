/**
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const arr = []
  const preorder = (node) => {
    if (!node) return
    arr.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }
  preorder(root)
  return arr.join(',')
}

/**
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null
  const vals = data.split(',').map(Number)
  let idx = 0
  const build = (lo, hi) => {
    if (idx >= vals.length || vals[idx] < lo || vals[idx] > hi) return null
    const val = vals[idx++]
    const node = new TreeNode(val)
    node.left = build(lo, val)
    node.right = build(val, hi)
    return node
  }
  return build(-Infinity, Infinity)
}
