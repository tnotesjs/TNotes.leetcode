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

  const traverse = (node) => {
    if (!node) return

    // 中序遍历：左 -> 根 -> 右
    traverse(node.left)
    result.push(node.val)
    traverse(node.right)
  }

  traverse(root)
  return result
}

// 等效写法：
/*
var inorderTraversal = function (root, res = []) {
  if (!root) return res
  inorderTraversal(root.left, res)
  res.push(root.val)
  inorderTraversal(root.right, res)
  return res
}
*/
