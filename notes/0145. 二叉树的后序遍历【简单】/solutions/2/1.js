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
  if (root === null) return []

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    // 弹出栈顶节点并访问，插入到结果数组头部
    const node = stack.pop()
    result.unshift(node.val)

    // 先压入左子节点，再压入右子节点
    if (node.left !== null) stack.push(node.left)
    if (node.right !== null) stack.push(node.right)
  }

  return result
}
