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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  const ans = []
  const queue = [root]
  let leftToRight = true

  while (queue.length) {
    const size = queue.length
    const level = new Array(size)
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      // 根据方向决定插入位置
      level[leftToRight ? i : size - 1 - i] = node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ans.push(level)
    leftToRight = !leftToRight
  }

  return ans
}
