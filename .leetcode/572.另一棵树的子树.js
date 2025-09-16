/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
 */

// @lc code=start
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // 将树序列化为字符串，然后检查是否包含子串
  function serialize(node) {
    if (!node) return 'null'
    return (
      '#' + node.val + ' ' + serialize(node.left) + ' ' + serialize(node.right)
    )
  }

  const rootStr = serialize(root)
  const subRootStr = serialize(subRoot)

  return rootStr.includes(subRootStr)
}
// @lc code=end
