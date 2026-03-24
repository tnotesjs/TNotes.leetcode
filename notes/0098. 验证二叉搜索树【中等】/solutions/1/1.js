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
var isValidBST = function (root) {
  const validate = (node, lo, hi) => {
    if (!node) return true
    if (node.val <= lo || node.val >= hi) return false
    return (
      validate(node.left, lo, node.val) && validate(node.right, node.val, hi)
    )
  }
  return validate(root, -Infinity, Infinity)
}
