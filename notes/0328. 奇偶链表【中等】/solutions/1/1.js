/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return head
  let odd = head,
    even = head.next,
    evenHead = even
  while (even && even.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
}
