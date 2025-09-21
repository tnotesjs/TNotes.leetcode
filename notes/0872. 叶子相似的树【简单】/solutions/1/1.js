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
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  // 获取树的叶值序列
  const getLeafValues = (root, leaves) => {
    if (!root) return

    // 如果是叶子节点，将值加入序列
    if (!root.left && !root.right) {
      leaves.push(root.val)
      return
    }

    // 递归遍历左右子树
    getLeafValues(root.left, leaves)
    getLeafValues(root.right, leaves)
  }

  // 分别获取两棵树的叶值序列
  const leaves1 = []
  const leaves2 = []

  getLeafValues(root1, leaves1)
  getLeafValues(root2, leaves2)

  // 比较两个叶值序列是否相同
  if (leaves1.length !== leaves2.length) {
    return false
  }

  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false
    }
  }

  return true
}
