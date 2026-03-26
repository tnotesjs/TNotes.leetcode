/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
  if (head.val >= 5) head = new ListNode(0, head)
  let cur = head
  while (cur) {
    cur.val = (cur.val * 2 + (cur.next && cur.next.val >= 5 ? 1 : 0)) % 10
    cur = cur.next
  }
  return head
}
