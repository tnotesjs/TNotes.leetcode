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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const ans = []

  const dfs = (node, remain, path) => {
    if (!node) return
    path.push(node.val)
    remain -= node.val
    if (!node.left && !node.right && remain === 0) {
      ans.push([...path])
    }
    dfs(node.left, remain, path)
    dfs(node.right, remain, path)
    path.pop()
  }

  dfs(root, targetSum, [])
  return ans
}
