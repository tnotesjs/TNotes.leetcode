/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  const inDeg = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (leftChild[i] !== -1) inDeg[leftChild[i]]++
    if (rightChild[i] !== -1) inDeg[rightChild[i]]++
  }
  let root = -1
  for (let i = 0; i < n; i++) {
    if (inDeg[i] === 0) {
      if (root !== -1) return false
      root = i
    } else if (inDeg[i] > 1) return false
  }
  if (root === -1) return false
  // BFS from root
  const visited = new Set()
  const queue = [root]
  visited.add(root)
  while (queue.length > 0) {
    const node = queue.shift()
    for (const child of [leftChild[node], rightChild[node]]) {
      if (child !== -1) {
        if (visited.has(child)) return false
        visited.add(child)
        queue.push(child)
      }
    }
  }
  return visited.size === n
}
