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
 * @return {number}
 */
var minCameraCover = function (root) {
  // 节点状态：0-未覆盖，1-已覆盖但无摄像头，2-有摄像头
  let count = 0

  const dfs = (node) => {
    if (!node) return 1 // 空节点视为已覆盖

    const left = dfs(node.left)
    const right = dfs(node.right)

    // 如果子节点有未覆盖的，当前节点必须安装摄像头
    if (left === 0 || right === 0) {
      count++
      return 2
    }

    // 如果子节点有摄像头，当前节点被覆盖
    if (left === 2 || right === 2) {
      return 1
    }

    // 子节点都被覆盖但无摄像头，当前节点未覆盖
    return 0
  }

  // 如果根节点未覆盖，需要在根节点安装摄像头
  if (dfs(root) === 0) {
    count++
  }

  return count
}
