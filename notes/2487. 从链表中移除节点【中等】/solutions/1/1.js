/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  // 反转链表，维护前缀最大值，再反转回来
  const reverse = (node) => {
    let prev = null
    while (node) {
      const next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return prev
  }

  head = reverse(head)
  let cur = head
  let maxVal = cur.val
  while (cur.next) {
    if (cur.next.val < maxVal) {
      cur.next = cur.next.next
    } else {
      maxVal = cur.next.val
      cur = cur.next
    }
  }
  return reverse(head)
}
