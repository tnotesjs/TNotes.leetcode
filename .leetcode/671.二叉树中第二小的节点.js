/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function (root) {
  if (!root) return -1

  const minVal = root.val

  const dfs = (node) => {
    if (!node) return -1

    // 如果当前节点值大于最小值，它可能就是第二小的值
    if (node.val > minVal) {
      return node.val
    }

    // 递归查找左右子树
    const left = dfs(node.left)
    const right = dfs(node.right)

    // 如果左右子树都有大于最小值的节点，返回较小的那个
    if (left !== -1 && right !== -1) {
      return Math.min(left, right)
    }

    // 如果只有一个子树有结果，返回那个结果
    // 如果两个子树都没有结果，返回 -1（此时两个都是 -1）
    // 可以简写为：
    return left !== -1 ? left : right
  }

  return dfs(root)
}
// @lc code=end
