/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    const node = new TreeNode(val)
    node.left = root
    return node
  }
  const queue = [root]
  for (let d = 1; d < depth - 1; d++) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  for (const node of queue) {
    const newLeft = new TreeNode(val)
    const newRight = new TreeNode(val)
    newLeft.left = node.left
    newRight.right = node.right
    node.left = newLeft
    node.right = newRight
  }
  return root
}
