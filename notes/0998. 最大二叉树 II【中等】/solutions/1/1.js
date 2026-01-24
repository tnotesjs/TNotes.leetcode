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
var insertIntoMaxTree = function (root, val) {
  // 如果 val 大于根节点，val 成为新根
  if (!root || val > root.val) {
    return new TreeNode(val, root, null)
  }

  // 否则递归在右子树中插入
  root.right = insertIntoMaxTree(root.right, val)
  return root
}
