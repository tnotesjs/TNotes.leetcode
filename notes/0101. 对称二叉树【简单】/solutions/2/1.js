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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true

  const queue = [[root.left, root.right]]
  let index = 0

  while (index < queue.length) {
    const [left, right] = queue[index++]

    if (!left && !right) continue
    if (!left || !right) return false
    if (left.val !== right.val) return false

    queue.push([left.left, right.right])
    queue.push([left.right, right.left])
  }

  return true
}
