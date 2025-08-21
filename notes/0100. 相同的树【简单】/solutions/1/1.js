/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 如果两个节点都为空，则相同
  if (!p && !q) return true

  // 如果只有一个节点为空，则不同
  if (!p || !q) return false

  // 如果节点值不同，则不同
  if (p.val !== q.val) return false

  // 递归比较左子树和右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
