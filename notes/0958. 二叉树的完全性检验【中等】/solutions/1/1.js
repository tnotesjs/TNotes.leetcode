/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  const queue = [root]
  let seenNull = false

  while (queue.length) {
    const node = queue.shift()
    if (!node) {
      seenNull = true
    } else {
      if (seenNull) return false
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return true
}
