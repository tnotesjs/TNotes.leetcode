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
