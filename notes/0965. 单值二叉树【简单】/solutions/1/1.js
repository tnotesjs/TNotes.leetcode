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
var isUnivalTree = function (root) {
  if (!root) return true

  // 使用递归方式检查每个节点的值是否与根节点相同
  function dfs(node, targetVal) {
    if (!node) return true
    if (node.val !== targetVal) return false
    return dfs(node.left, targetVal) && dfs(node.right, targetVal)
  }

  return dfs(root, root.val)
}

// 另一种写法：
/* 
var isUnivalTree = function (root) {
  if (!root) return true

  // 检查左子节点
  if (root.left && root.left.val !== root.val) return false
  // 检查右子节点
  if (root.right && root.right.val !== root.val) return false

  // 递归检查左右子树
  return isUnivalTree(root.left) && isUnivalTree(root.right)
}
*/
