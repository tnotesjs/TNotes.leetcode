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

  // 获取树的高度（最左侧路径）
  const getHeight = (node) => {
    let height = 0
    while (node) {
      height++
      node = node.left
    }
    return height
  }

  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  if (leftHeight === rightHeight) {
    // 如果左右高度相等，左子树必是满二叉树，用公式 2^h 直接计算，递归右子树
    return (1 << leftHeight) + countNodes(root.right)
  } else {
    // 如果左右高度不等，右子树必是满二叉树，用公式 2^h 直接计算，递归左子树
    return (1 << rightHeight) + countNodes(root.left)
  }
}
