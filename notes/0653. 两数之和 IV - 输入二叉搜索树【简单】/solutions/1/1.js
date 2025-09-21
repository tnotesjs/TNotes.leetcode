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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 中序遍历得到有序数组
  const inorder = []
  const dfs = (node) => {
    if (!node) return
    dfs(node.left)
    inorder.push(node.val)
    dfs(node.right)
  }

  dfs(root)

  // 双指针查找两数之和
  let left = 0
  let right = inorder.length - 1

  while (left < right) {
    const sum = inorder[left] + inorder[right]
    if (sum === k) {
      return true
    } else if (sum < k) {
      left++
    } else {
      right--
    }
  }

  return false
}
