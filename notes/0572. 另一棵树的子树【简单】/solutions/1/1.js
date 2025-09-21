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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // 空树不被认为是任何树的子树（根据题目要求）
  if (!root) return false

  return (
    // 判断以当前节点为根的子树是否与subRoot相同
    isSameTree(root, subRoot) ||
    // 递归检查左子树和右子树
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  )
}

// 辅助函数：判断两棵树是否完全相同
function isSameTree(p, q) {
  // 两个都为空，则相同
  if (!p && !q) return true

  // 一个为空一个不为空，则不相同
  if (!p || !q) return false

  // 值不相同，则不相同
  if (p.val !== q.val) return false

  // 递归检查左右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
