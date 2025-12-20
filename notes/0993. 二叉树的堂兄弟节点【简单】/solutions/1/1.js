/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (!root) return false

  const queue = [root]

  while (queue.length) {
    const size = queue.length
    let foundX = false
    let foundY = false

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      // 同父节点的两个孩子为 x 和 y，则是兄弟，非堂兄弟
      if (node.left && node.right) {
        const lv = node.left.val
        const rv = node.right.val
        if ((lv === x && rv === y) || (lv === y && rv === x)) {
          return false
        }
      }

      if (node.left) {
        if (node.left.val === x) foundX = true
        if (node.left.val === y) foundY = true
        queue.push(node.left)
      }
      if (node.right) {
        if (node.right.val === x) foundX = true
        if (node.right.val === y) foundY = true
        queue.push(node.right)
      }
    }

    if (foundX && foundY) return true
    if (foundX || foundY) return false // 仅在同一层出现一个，深度不同
  }

  return false
}
