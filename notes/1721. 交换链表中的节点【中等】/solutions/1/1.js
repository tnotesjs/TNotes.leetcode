/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let first = head
  for (let i = 1; i < k; i++) first = first.next
  let slow = head,
    fast = first
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  const tmp = first.val
  first.val = slow.val
  slow.val = tmp
  return head
}
