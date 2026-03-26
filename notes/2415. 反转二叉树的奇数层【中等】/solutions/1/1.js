/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
  let queue = [root]
  let level = 0
  while (queue.length) {
    if (level % 2 === 1) {
      let l = 0,
        r = queue.length - 1
      while (l < r) {
        ;[queue[l].val, queue[r].val] = [queue[r].val, queue[l].val]
        l++
        r--
      }
    }
    const next = []
    for (const node of queue) {
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
    }
    queue = next
    level++
  }
  return root
}
