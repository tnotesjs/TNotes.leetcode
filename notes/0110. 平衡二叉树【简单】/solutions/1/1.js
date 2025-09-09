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
