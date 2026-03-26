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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
  const sorted = []
  const inorder = (node) => {
    if (!node) return
    inorder(node.left)
    sorted.push(node.val)
    inorder(node.right)
  }
  inorder(root)

  const bisectLeft = (arr, target) => {
    let lo = 0, hi = arr.length
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (arr[mid] < target) lo = mid + 1
      else hi = mid
    }
    return lo
  }

  return queries.map(q => {
    const idx = bisectLeft(sorted, q)
    let mn = -1, mx = -1
    if (idx < sorted.length && sorted[idx] === q) return [q, q]
    if (idx > 0) mn = sorted[idx - 1]
    if (idx < sorted.length) mx = sorted[idx]
    return [mn, mx]
  })
}
