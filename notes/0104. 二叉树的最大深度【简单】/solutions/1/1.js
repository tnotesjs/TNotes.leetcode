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
var maxDepth = function (root, lDep = 0, rDep = 0) {
  if (!root) return Math.max(lDep, rDep)
  lDep = maxDepth(root.left, lDep + 1)
  rDep = maxDepth(root.right, rDep + 1)
  return Math.max(lDep, rDep)
}
