/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  let leftCount = 0,
    rightCount = 0
  function count(node) {
    if (!node) return 0
    const l = count(node.left)
    const r = count(node.right)
    if (node.val === x) {
      leftCount = l
      rightCount = r
    }
    return l + r + 1
  }
  count(root)
  const parent = n - leftCount - rightCount - 1
  const half = Math.floor(n / 2)
  return leftCount > half || rightCount > half || parent > half
}
