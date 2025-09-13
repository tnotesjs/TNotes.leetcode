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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root

  // 使用栈进行迭代
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()

    // 交换当前节点的左右子树
    ;[node.left, node.right] = [node.right, node.left]

    // 将非空子节点加入栈中
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return root
}
