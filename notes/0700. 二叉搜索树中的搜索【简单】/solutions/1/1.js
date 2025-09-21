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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 基础情况：节点为空或找到目标值
  if (!root || root.val === val) {
    return root
  }

  // 利用BST性质进行搜索
  if (val < root.val) {
    // 目标值小于当前节点值，在左子树中搜索
    return searchBST(root.left, val)
  } else {
    // 目标值大于当前节点值，在右子树中搜索
    return searchBST(root.right, val)
  }
}
