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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = []

  const traverse = (node) => {
    if (!node) return

    // 后序遍历：左 -> 右 -> 根
    traverse(node.left)
    traverse(node.right)
    result.push(node.val)
  }

  traverse(root)
  return result
}
