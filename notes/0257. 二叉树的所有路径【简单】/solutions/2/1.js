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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = []

  if (!root) return result

  dfs(root, '', result)

  return result
}

function dfs(node, path, result) {
  if (!node) return

  // 构建当前路径字符串
  const currentPath = path ? path + '->' + node.val : String(node.val)

  // 如果是叶子节点，将路径加入结果集
  if (!node.left && !node.right) {
    result.push(currentPath)
  } else {
    // 递归遍历左右子树
    dfs(node.left, currentPath, result)
    dfs(node.right, currentPath, result)
  }
}
