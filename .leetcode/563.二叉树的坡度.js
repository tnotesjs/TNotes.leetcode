/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  let totalTilt = 0

  // 递归函数返回以当前节点为根的子树的所有节点值之和
  function sum(node) {
    if (!node) return 0

    // 递归计算左右子树的节点值之和
    let leftSum = sum(node.left)
    let rightSum = sum(node.right)

    // 计算当前节点的坡度并累加到总坡度
    let tilt = Math.abs(leftSum - rightSum)
    totalTilt += tilt

    // 返回以当前节点为根的子树的所有节点值之和
    return leftSum + rightSum + node.val
  }

  sum(root)
  return totalTilt
}
// @lc code=end
