/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  if (n % 2 === 0) return []
  if (n === 1) return [new TreeNode(0)]
  const res = []
  for (let i = 1; i < n; i += 2) {
    const lefts = allPossibleFBT(i)
    const rights = allPossibleFBT(n - 1 - i)
    for (const l of lefts)
      for (const r of rights) res.push(new TreeNode(0, l, r))
  }
  return res
}
