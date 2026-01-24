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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage) {
  const flipped = [] // 记录翻转的节点
  let index = 0 // voyage 数组的当前索引

  const dfs = (node) => {
    if (!node) return true

    // 当前节点值与 voyage 不匹配
    if (node.val !== voyage[index]) {
      return false
    }
    index++

    // 检查左子节点是否需要翻转
    if (node.left && node.left.val !== voyage[index]) {
      // 需要翻转,记录当前节点并交换左右子树
      flipped.push(node.val)
      // 先遍历右子树,再遍历左子树
      return dfs(node.right) && dfs(node.left)
    }

    // 不需要翻转,正常遍历左右子树
    return dfs(node.left) && dfs(node.right)
  }

  return dfs(root) ? flipped : [-1]
}
