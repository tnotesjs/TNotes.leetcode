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
var minDepth = function (root) {
  // 如果根节点为空，深度为 0
  if (!root) return 0

  // 如果当前节点是叶子节点，返回 1
  if (!root.left && !root.right) return 1

  // 如果左子树为空，只考虑右子树
  if (!root.left) return minDepth(root.right) + 1

  // 如果右子树为空，只考虑左子树
  if (!root.right) return minDepth(root.left) + 1

  // 如果左右子树都不为空，返回较小深度 +1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
