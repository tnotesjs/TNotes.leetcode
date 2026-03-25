/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  let res = 0
  const dfs = (node) => {
    if (!node) return []
    if (!node.left && !node.right) return [1] // 叶子距离为 1
    const left = dfs(node.left)
    const right = dfs(node.right)
    for (const l of left) for (const r of right) if (l + r <= distance) res++
    return [...left, ...right].map((d) => d + 1).filter((d) => d < distance)
  }
  dfs(root)
  return res
}
