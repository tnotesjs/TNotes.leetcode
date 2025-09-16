/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let diameter = 0

  // 计算以当前节点为根的子树的最大深度
  function depth(node) {
    if (!node) return 0

    // 递归计算左右子树的深度
    let leftDepth = depth(node.left)
    let rightDepth = depth(node.right)

    // 更新直径：经过当前节点的路径长度 = 左子树深度 + 右子树深度
    diameter = Math.max(diameter, leftDepth + rightDepth)

    // 返回当前节点为根的子树的最大深度
    return Math.max(leftDepth, rightDepth) + 1
  }

  depth(root)
  return diameter
}
// @lc code=end
