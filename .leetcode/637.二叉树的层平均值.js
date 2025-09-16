/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return []

  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const levelSize = queue.length
    let levelSum = 0

    // 处理当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      levelSum += node.val

      // 将下一层的节点加入队列
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    // 计算当前层的平均值
    result.push(levelSum / levelSize)
  }

  return result
}
// @lc code=end
