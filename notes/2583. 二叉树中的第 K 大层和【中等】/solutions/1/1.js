/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  const sums = []
  let queue = [root]
  while (queue.length) {
    let sum = 0
    const next = []
    for (const node of queue) {
      sum += node.val
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
    }
    sums.push(sum)
    queue = next
  }
  if (sums.length < k) return -1
  sums.sort((a, b) => b - a)
  return sums[k - 1]
}
