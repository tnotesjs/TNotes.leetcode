/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let maxW = 0n
  const queue = [[root, 0n]]
  while (queue.length) {
    const size = queue.length
    const first = queue[0][1]
    for (let i = 0; i < size; i++) {
      const [node, idx] = queue.shift()
      if (i === size - 1) {
        const w = idx - first + 1n
        if (w > maxW) maxW = w
      }
      if (node.left) queue.push([node.left, 2n * (idx - first)])
      if (node.right) queue.push([node.right, 2n * (idx - first) + 1n])
    }
  }
  return Number(maxW)
}
