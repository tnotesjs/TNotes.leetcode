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
var distributeCoins = function (root) {
  let moves = 0

  const dfs = (node) => {
    if (!node) return 0

    // 后序遍历：先处理左右子树
    const leftBalance = dfs(node.left)
    const rightBalance = dfs(node.right)

    // 计算当前节点的移动次数（左右子树的盈余或缺失）
    moves += Math.abs(leftBalance) + Math.abs(rightBalance)

    // 返回当前子树的盈余或缺失
    // node.val - 1 表示当前节点自己的盈余或缺失
    // leftBalance + rightBalance 表示子树传递上来的盈余或缺失
    return node.val - 1 + leftBalance + rightBalance
  }

  dfs(root)
  return moves
}
