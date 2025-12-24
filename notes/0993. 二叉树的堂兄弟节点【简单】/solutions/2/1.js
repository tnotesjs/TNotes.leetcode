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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  // 使用 BFS 找到 x 和 y 的深度和父节点
  const queue = [[root, null, 0]] // [节点, 父节点, 深度]
  let xInfo = null
  let yInfo = null

  while (queue.length > 0) {
    const [node, parent, depth] = queue.shift()

    if (node.val === x) {
      xInfo = { parent, depth }
    }
    if (node.val === y) {
      yInfo = { parent, depth }
    }

    // 如果已经找到两个节点，可以提前退出
    if (xInfo && yInfo) {
      break
    }

    // 继续遍历
    if (node.left) {
      queue.push([node.left, node, depth + 1])
    }
    if (node.right) {
      queue.push([node.right, node, depth + 1])
    }
  }

  // 堂兄弟条件：深度相同且父节点不同
  return (
    xInfo &&
    yInfo &&
    xInfo.depth === yInfo.depth &&
    xInfo.parent !== yInfo.parent
  )
}
