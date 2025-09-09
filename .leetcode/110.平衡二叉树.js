/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  return getHeightAndCheckBalance(root) !== -1
}

// 返回树的高度，如果不平衡则返回-1
function getHeightAndCheckBalance(node) {
  if (!node) return 0

  // 获取左子树高度
  const leftHeight = getHeightAndCheckBalance(node.left)
  if (leftHeight === -1) return -1 // 左子树不平衡

  // 获取右子树高度
  const rightHeight = getHeightAndCheckBalance(node.right)
  if (rightHeight === -1) return -1 // 右子树不平衡

  // 检查当前节点是否平衡
  if (Math.abs(leftHeight - rightHeight) > 1) return -1

  // 返回当前节点的高度
  return Math.max(leftHeight, rightHeight) + 1
}
// @lc code=end

// #region 1
/* 
基础解法 - 自顶向下
时间复杂度：O(n²)，最坏情况下每个节点都要计算高度
空间复杂度：O(n)，递归调用栈的深度

对每个节点递归检查：
当前节点左右子树高度差不超过 1
左右子树都是平衡二叉树
*/

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 空树是平衡二叉树
  if (!root) return true

  // 检查当前节点是否平衡且左右子树是否都平衡
  return (
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

// 计算二叉树的高度
function getHeight(node) {
  if (!node) return 0

  return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}
// #endregion

// #region 2
/* 
优化解法 - 自底向上
时间复杂度：O(n)，每个节点只访问一次
空间复杂度：O(n)，递归调用栈的深度

自底向上计算高度并检查平衡性
如果发现不平衡的子树，立即返回 -1
避免重复计算，提高效率

核心逻辑：如果有不平衡，一定先出现在末端。
*/

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  return getHeightAndCheckBalance(root) !== -1
}

// 返回树的高度，如果不平衡则返回-1
function getHeightAndCheckBalance(node) {
  if (!node) return 0

  // 获取左子树高度
  const leftHeight = getHeightAndCheckBalance(node.left)
  if (leftHeight === -1) return -1 // 左子树不平衡

  // 获取右子树高度
  const rightHeight = getHeightAndCheckBalance(node.right)
  if (rightHeight === -1) return -1 // 右子树不平衡

  // 检查当前节点是否平衡
  if (Math.abs(leftHeight - rightHeight) > 1) return -1

  // 返回当前节点的高度
  return Math.max(leftHeight, rightHeight) + 1
}
// #endregion
