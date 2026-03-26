/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  let cur = head
  while (cur && cur.next) {
    const g = gcd(cur.val, cur.next.val)
    const node = new ListNode(g, cur.next)
    cur.next = node
    cur = node.next
  }
  return head
}
