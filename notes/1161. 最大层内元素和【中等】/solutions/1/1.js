/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  const queue = [root]
  let maxSum = -Infinity,
    ans = 1,
    level = 1
  while (queue.length) {
    const size = queue.length
    let sum = 0
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    if (sum > maxSum) {
      maxSum = sum
      ans = level
    }
    level++
  }
  return ans
}
