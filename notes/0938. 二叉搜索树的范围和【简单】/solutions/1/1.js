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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (!root) return 0
  let sum = 0
  if (root.val >= low && root.val <= high) sum += root.val
  // 利用 BST 性质剪枝：左子树只有在根值大于 low 时可能包含合法值
  if (root.val > low) sum += rangeSumBST(root.left, low, high)
  // 右子树只有在根值小于 high 时可能包含合法值
  if (root.val < high) sum += rangeSumBST(root.right, low, high)
  return sum
}
