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
var evaluateTree = function (root) {
  // 叶子节点：直接返回布尔值
  if (!root.left && !root.right) {
    return root.val === 1
  }

  // 递归计算左右子树的值
  const leftVal = evaluateTree(root.left)
  const rightVal = evaluateTree(root.right)

  // 根据当前节点的运算符进行计算
  if (root.val === 2) {
    // OR 运算
    return leftVal || rightVal
  } else {
    // AND 运算 (root.val === 3)
    return leftVal && rightVal
  }
}
