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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const nodes = [] // 存储所有节点信息 [col, row, val]

  // DFS 遍历，记录每个节点的坐标和值
  const dfs = (node, row, col) => {
    if (!node) return
    nodes.push([col, row, node.val])
    dfs(node.left, row + 1, col - 1)
    dfs(node.right, row + 1, col + 1)
  }

  dfs(root, 0, 0)

  // 排序：先按列，再按行，最后按值
  nodes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0] // 按列排序
    if (a[1] !== b[1]) return a[1] - b[1] // 按行排序
    return a[2] - b[2] // 按值排序
  })

  // 按列分组
  const result = []
  let prevCol = null
  for (const [col, row, val] of nodes) {
    if (col !== prevCol) {
      result.push([])
      prevCol = col
    }
    result[result.length - 1].push(val)
  }

  return result
}
