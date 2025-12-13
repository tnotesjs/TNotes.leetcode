/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // 如果 root1 为空，返回 root2
  if (!root1) return root2
  // 如果 root2 为空，返回 root1
  if (!root2) return root1

  // 两个节点都存在，创建新节点，值为两节点值之和
  const merged = new TreeNode(root1.val + root2.val)

  // 递归合并左右子树
  merged.left = mergeTrees(root1.left, root2.left)
  merged.right = mergeTrees(root1.right, root2.right)

  return merged
}
