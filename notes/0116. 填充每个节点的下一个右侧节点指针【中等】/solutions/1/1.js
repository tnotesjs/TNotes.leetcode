/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return null
  let leftmost = root

  while (leftmost.left) {
    let cur = leftmost
    while (cur) {
      // 左子 -> 右子
      cur.left.next = cur.right
      // 右子 -> 下一个节点的左子
      if (cur.next) cur.right.next = cur.next.left
      cur = cur.next
    }
    leftmost = leftmost.left
  }

  return root
}
