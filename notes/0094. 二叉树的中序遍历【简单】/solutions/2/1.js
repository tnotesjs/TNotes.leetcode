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
var inorderTraversal = function (root) {
  const result = []
  const stack = []
  let current = root

  while (current !== null || stack.length > 0) {
    // 一直往左子树走到底，将路径上的节点压入栈
    while (current !== null) {
      stack.push(current)
      current = current.left
    }

    // 弹出栈顶节点并访问
    current = stack.pop()
    result.push(current.val)

    // 转向右子树
    current = current.right
  }

  return result
}
