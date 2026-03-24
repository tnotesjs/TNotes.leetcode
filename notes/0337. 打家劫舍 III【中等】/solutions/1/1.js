/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  function dfs(node) {
    if (!node) return [0, 0] // [不抢, 抢]
    const left = dfs(node.left)
    const right = dfs(node.right)
    const notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    const doRob = node.val + left[0] + right[0]
    return [notRob, doRob]
  }
  const res = dfs(root)
  return Math.max(res[0], res[1])
}
