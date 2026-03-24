/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
  const getHeight = (node) =>
    !node ? 0 : 1 + Math.max(getHeight(node.left), getHeight(node.right))
  const h = getHeight(root)
  const n = (1 << h) - 1
  const res = Array.from({ length: h }, () => new Array(n).fill(''))
  const fill = (node, r, c) => {
    if (!node) return
    res[r][c] = '' + node.val
    const offset = 1 << (h - r - 2)
    fill(node.left, r + 1, c - offset)
    fill(node.right, r + 1, c + offset)
  }
  fill(root, 0, (n - 1) >> 1)
  return res
}
