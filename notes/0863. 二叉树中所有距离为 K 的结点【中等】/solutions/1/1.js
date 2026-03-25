/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const graph = new Map()
  const build = (node, parent) => {
    if (!node) return
    if (!graph.has(node.val)) graph.set(node.val, [])
    if (parent !== null) {
      graph.get(node.val).push(parent.val)
      if (!graph.has(parent.val)) graph.set(parent.val, [])
      graph.get(parent.val).push(node.val)
    }
    build(node.left, node)
    build(node.right, node)
  }
  build(root, null)
  const visited = new Set([target.val])
  let queue = [target.val]
  let dist = 0
  while (queue.length && dist < k) {
    const next = []
    for (const u of queue) {
      for (const v of graph.get(u) || []) {
        if (!visited.has(v)) {
          visited.add(v)
          next.push(v)
        }
      }
    }
    queue = next
    dist++
  }
  return queue
}
