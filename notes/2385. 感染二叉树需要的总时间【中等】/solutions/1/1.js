/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  const graph = new Map()
  const addEdge = (u, v) => {
    if (!graph.has(u)) graph.set(u, [])
    if (!graph.has(v)) graph.set(v, [])
    graph.get(u).push(v)
    graph.get(v).push(u)
  }
  const buildGraph = (node) => {
    if (!node) return
    if (node.left) {
      addEdge(node.val, node.left.val)
      buildGraph(node.left)
    }
    if (node.right) {
      addEdge(node.val, node.right.val)
      buildGraph(node.right)
    }
  }
  buildGraph(root)
  const visited = new Set([start])
  let queue = [start]
  let time = -1
  while (queue.length) {
    const next = []
    for (const node of queue) {
      for (const neighbor of graph.get(node) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          next.push(neighbor)
        }
      }
    }
    queue = next
    time++
  }
  return time
}
