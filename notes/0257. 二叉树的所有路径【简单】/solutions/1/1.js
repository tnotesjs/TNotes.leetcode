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

  dfs(root, [], result)

  return result
}

function dfs(node, path, result) {
  if (!node) return

  // 将当前节点加入路径
  path.push(node.val)

  // 如果是叶子节点，将路径加入结果集
  if (!node.left && !node.right) {
    result.push(path.join('->'))
  } else {
    // 递归遍历左右子树
    dfs(node.left, path, result)
    dfs(node.right, path, result)
  }

  // 回溯，移除当前节点
  path.pop()
}
