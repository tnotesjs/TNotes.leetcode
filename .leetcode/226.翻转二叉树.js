/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root

  // 使用栈进行迭代
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()

    // 交换当前节点的左右子树
    ;[node.left, node.right] = [node.right, node.left]

    // 将非空子节点加入栈中
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return root
}
// @lc code=end

// #region 1

/* 
递归解法（前序遍历思想）

- 时间复杂度：O(n)，其中 n 是二叉树的节点数，需要访问每个节点一次
- 空间复杂度：O(h)，其中 h 是二叉树的高度，主要是递归调用栈的空间
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 基本情况：如果节点为空，直接返回
  if (!root) return root

  // 交换当前节点的左右子树
  const temp = root.left
  root.left = root.right
  root.right = temp

  // 递归翻转左子树
  invertTree(root.left)

  // 递归翻转右子树
  invertTree(root.right)

  return root
}

// #endregion

// #region 1.1

/* 
递归解法（更简洁的写法）.
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 基本情况：如果节点为空，直接返回
  if (!root)
    return root

    // 交换左右子树并递归处理
  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]

  return root
}

// #endregion

// #region 2

/* 
迭代解法（使用栈）

- 时间复杂度：O(n)，需要访问每个节点一次
- 空间复杂度：O(w)，其中 w 是二叉树的最大宽度，主要是栈的空间
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root

  // 使用栈进行迭代
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()

    // 交换当前节点的左右子树
    ;[node.left, node.right] = [node.right, node.left]

    // 将非空子节点加入栈中
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return root
}

// #endregion
