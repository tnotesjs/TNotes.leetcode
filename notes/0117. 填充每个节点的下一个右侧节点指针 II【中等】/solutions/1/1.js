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
  let cur = root

  while (cur) {
    const dummy = new _Node(0) // 下一层的虚拟头节点
    let tail = dummy

    while (cur) {
      if (cur.left) {
        tail.next = cur.left
        tail = tail.next
      }
      if (cur.right) {
        tail.next = cur.right
        tail = tail.next
      }
      cur = cur.next
    }

    cur = dummy.next // 进入下一层
  }

  return root
}
