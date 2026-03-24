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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let cur = root
  while (cur) {
    if (cur.left) {
      // 找左子树的最右节点
      let pre = cur.left
      while (pre.right) pre = pre.right
      // 将右子树挂到左子树的最右节点
      pre.right = cur.right
      // 左子树移到右边，左置空
      cur.right = cur.left
      cur.left = null
    }
    cur = cur.right
  }
}
