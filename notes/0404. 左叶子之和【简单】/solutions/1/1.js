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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0

  // 判断是否为左叶子节点的函数
  const isLeaf = (node) => {
    return node && !node.left && !node.right
  }

  let sum = 0

  // 如果左子节点是叶子节点
  if (isLeaf(root.left)) {
    sum += root.left.val
  }

  // 递归处理左右子树
  sum += sumOfLeftLeaves(root.left)
  sum += sumOfLeftLeaves(root.right)

  return sum
}
