/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = []
  let node = root
  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    if (--k === 0) return node.val
    node = node.right
  }
}
