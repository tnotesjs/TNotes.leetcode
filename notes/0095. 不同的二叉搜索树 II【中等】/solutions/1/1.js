/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const build = (lo, hi) => {
    if (lo > hi) return [null]
    const result = []
    for (let i = lo; i <= hi; i++) {
      for (const left of build(lo, i - 1)) // 枚举左子树
        for (const right of build(i + 1, hi)) // 枚举右子树
          result.push(new TreeNode(i, left, right))
    }
    return result
  }
  return build(1, n)
}
