/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  let minDiff = Infinity
  let prev = null

  // 中序遍历函数
  function inorder(node) {
    if (!node) return

    // 遍历左子树
    inorder(node.left)

    // 处理当前节点
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev)
    }
    prev = node.val

    // 遍历右子树
    inorder(node.right)
  }

  inorder(root)
  return minDiff
}
// @lc code=end
