/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  // 第一步：在每个节点后插入克隆节点
  let cur = head
  while (cur) {
    const clone = new _Node(cur.val, cur.next, null)
    cur.next = clone
    cur = clone.next
  }
  // 第二步：设置克隆节点的 random
  cur = head
  while (cur) {
    if (cur.random) {
      cur.next.random = cur.random.next
    }
    cur = cur.next.next
  }
  // 第三步：拆分链表
  cur = head
  const newHead = head.next
  while (cur) {
    const clone = cur.next
    cur.next = clone.next
    clone.next = clone.next ? clone.next.next : null
    cur = cur.next
  }
  return newHead
}
