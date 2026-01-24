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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let result = null

  const dfs = (node, path) => {
    if (!node) return

    // 将当前节点的字符添加到路径前面（因为是从叶到根）
    path = String.fromCharCode(97 + node.val) + path

    // 如果是叶子节点，更新结果
    if (!node.left && !node.right) {
      if (result === null || path < result) {
        result = path
      }
      return
    }

    // 递归遍历左右子树
    dfs(node.left, path)
    dfs(node.right, path)
  }

  dfs(root, '')
  return result
}
