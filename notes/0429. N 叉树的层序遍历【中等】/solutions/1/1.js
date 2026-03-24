/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const res = [],
    queue = [root]
  while (queue.length) {
    const size = queue.length,
      level = []
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      level.push(node.val)
      for (const child of node.children) queue.push(child)
    }
    res.push(level)
  }
  return res
}
