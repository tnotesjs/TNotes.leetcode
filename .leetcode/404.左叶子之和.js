/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0

  let sum = 0

  // 检查左子节点是否为叶子节点
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val
  }

  // 递归处理左右子树
  sum += sumOfLeftLeaves(root.left)
  sum += sumOfLeftLeaves(root.right)

  return sum
}
// @lc code=end
