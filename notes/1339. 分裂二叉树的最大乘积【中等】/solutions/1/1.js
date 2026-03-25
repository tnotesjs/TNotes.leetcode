/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function (root) {
  const MOD = 1e9 + 7
  const sums = []
  const getSum = (node) => {
    if (!node) return 0
    const s = node.val + getSum(node.left) + getSum(node.right)
    sums.push(s)
    return s
  }
  const total = getSum(root)
  let ans = 0
  for (const s of sums) {
    const product = s * (total - s)
    if (product > ans) ans = product
  }
  return ans % MOD
}
