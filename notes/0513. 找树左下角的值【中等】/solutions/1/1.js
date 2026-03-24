/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let res = root.val
  const queue = [root]
  while (queue.length) {
    const size = queue.length
    res = queue[0].val
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
}
