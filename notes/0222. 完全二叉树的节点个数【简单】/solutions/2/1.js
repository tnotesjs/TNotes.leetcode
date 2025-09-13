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
