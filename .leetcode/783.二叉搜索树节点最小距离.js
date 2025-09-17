/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function (root) {
  let minDiff = Infinity
  let prev = null
  const stack = []
  let current = root

  // 迭代中序遍历
  while (current || stack.length > 0) {
    // 一直向左走到底
    while (current) {
      stack.push(current)
      current = current.left
    }

    // 处理栈顶节点
    current = stack.pop()

    if (prev !== null) {
      minDiff = Math.min(minDiff, current.val - prev)
    }
    prev = current.val

    // 转向右子树
    current = current.right
  }

  return minDiff
}
// @lc code=end
