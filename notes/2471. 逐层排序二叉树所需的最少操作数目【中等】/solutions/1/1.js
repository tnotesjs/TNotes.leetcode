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
var minimumOperations = function (root) {
  // 计算排序所需的最小交换次数
  const minSwaps = (arr) => {
    const n = arr.length
    const indexed = arr.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0])
    const visited = new Uint8Array(n)
    let swaps = 0
    for (let i = 0; i < n; i++) {
      if (visited[i] || indexed[i][1] === i) continue
      let cycleLen = 0, j = i
      while (!visited[j]) {
        visited[j] = 1
        j = indexed[j][1]
        cycleLen++
      }
      swaps += cycleLen - 1
    }
    return swaps
  }

  let ans = 0
  const queue = [root]
  while (queue.length) {
    const size = queue.length
    const level = []
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ans += minSwaps(level)
  }
  return ans
}
