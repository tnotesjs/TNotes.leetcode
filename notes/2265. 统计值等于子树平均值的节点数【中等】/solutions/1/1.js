/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let count = 0
  const dfs = (node) => {
    if (!node) return [0, 0]
    const [lSum, lCnt] = dfs(node.left)
    const [rSum, rCnt] = dfs(node.right)
    const sum = lSum + rSum + node.val
    const cnt = lCnt + rCnt + 1
    if (Math.floor(sum / cnt) === node.val) count++
    return [sum, cnt]
  }
  dfs(root)
  return count
}
