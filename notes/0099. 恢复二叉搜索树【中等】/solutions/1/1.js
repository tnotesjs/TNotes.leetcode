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
var recoverTree = function (root) {
  let first = null,
    second = null,
    prev = null
  // Morris 中序遍历
  let cur = root
  while (cur) {
    if (cur.left) {
      let pred = cur.left
      while (pred.right && pred.right !== cur) pred = pred.right
      if (!pred.right) {
        pred.right = cur
        cur = cur.left
      } else {
        pred.right = null
        if (prev && prev.val > cur.val) {
          if (!first) first = prev
          second = cur
        }
        prev = cur
        cur = cur.right
      }
    } else {
      if (prev && prev.val > cur.val) {
        if (!first) first = prev
        second = cur
      }
      prev = cur
      cur = cur.right
    }
  }
  ;[first.val, second.val] = [second.val, first.val]
}
