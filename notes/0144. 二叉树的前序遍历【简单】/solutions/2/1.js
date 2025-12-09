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
var preorderTraversal = function (root) {
  if (root === null) return []

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    // 弹出栈顶节点并访问
    const node = stack.pop()
    result.push(node.val)

    // 先压入右子节点，再压入左子节点（保证左子树先遍历）
    if (node.right !== null) stack.push(node.right)
    if (node.left !== null) stack.push(node.left)
  }

  return result
}
