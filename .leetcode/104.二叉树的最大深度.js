/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法二：迭代解法（层序遍历）
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  // 使用队列存储每一层的节点
  const queue = [root]
  let depth = 0

  while (queue.length > 0) {
    // 当前层的节点数量
    const levelSize = queue.length
    // 每处理完一层，深度加 1
    depth++

    // 处理当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()

      // 将下一层的节点加入队列
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  // 当队列为空时，返回累计的深度
  return depth
}
// @lc code=end
