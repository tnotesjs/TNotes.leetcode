/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return []
  const res = []
  const queue = [root]
  while (queue.length) {
    let max = -Infinity
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      max = Math.max(max, node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(max)
  }
  return res
}
