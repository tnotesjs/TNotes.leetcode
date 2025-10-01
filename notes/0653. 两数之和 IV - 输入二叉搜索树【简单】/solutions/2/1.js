/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const set = new Set()

  const dfs = (node) => {
    if (!node) return false

    // 检查是否存在补数
    if (set.has(k - node.val)) {
      return true
    }

    // 将当前节点值加入集合
    set.add(node.val)

    // 递归检查左右子树
    return dfs(node.left) || dfs(node.right)
  }

  return dfs(root)
}
