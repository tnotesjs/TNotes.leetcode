/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  const queue = [root]
  let level = 0
  while (queue.length) {
    const size = queue.length
    let prev = level % 2 === 0 ? -Infinity : Infinity
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      const v = node.val
      if (level % 2 === 0) {
        if (v % 2 === 0 || v <= prev) return false
      } else {
        if (v % 2 === 1 || v >= prev) return false
      }
      prev = v
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    level++
  }
  return true
}
