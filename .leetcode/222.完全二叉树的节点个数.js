/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  if (!root) return 0

  // 计算树的高度
  const leftHeight = getLeftHeight(root)
  const rightHeight = getRightHeight(root)

  // 如果左右子树高度相同，说明是满二叉树
  if (leftHeight === rightHeight) {
    // 满二叉树节点数公式：2^h - 1
    return Math.pow(2, leftHeight) - 1
  }

  // 如果高度不同，递归计算左右子树节点数
  return 1 + countNodes(root.left) + countNodes(root.right)
}

// 计算从根节点一直向左走的高度
function getLeftHeight(node) {
  let height = 0
  while (node) {
    height++
    node = node.left
  }
  return height
}

// 计算从根节点一直向右走的高度
function getRightHeight(node) {
  let height = 0
  while (node) {
    height++
    node = node.right
  }
  return height
}
// @lc code=end

// #region 1
/* 
普通递归遍历

- 时间复杂度：O(n)，需要访问每个节点
- 空间复杂度：O(log n)，递归调用栈的深度
*/

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */

// var countNodes = function (root) {
//   if (!root) return 0

//   return 1 + countNodes(root.left) + countNodes(root.right)
// }
// #endregion

// #region 2
/* 
利用完全二叉树特性优化递归

- 时间复杂度：O(log²n)，每次递归需要 O(log n) 时间计算高度，最多递归 O(log n) 次
- 空间复杂度：O(log n)，递归调用栈的深度
*/

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var countNodes = function (root) {
//   if (!root) return 0

//   // 计算树的高度
//   const leftHeight = getLeftHeight(root)
//   const rightHeight = getRightHeight(root)

//   // 如果左右子树高度相同，说明是满二叉树
//   if (leftHeight === rightHeight) {
//     // 满二叉树节点数公式：2^h - 1
//     return Math.pow(2, leftHeight) - 1
//   }

//   // 如果高度不同，递归计算左右子树节点数
//   return 1 + countNodes(root.left) + countNodes(root.right)
// }

// // 计算从根节点一直向左走的高度
// function getLeftHeight(node) {
//   let height = 0
//   while (node) {
//     height++
//     node = node.left
//   }
//   return height
// }

// // 计算从根节点一直向右走的高度
// function getRightHeight(node) {
//   let height = 0
//   while (node) {
//     height++
//     node = node.right
//   }
//   return height
// }
// #endregion
