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
