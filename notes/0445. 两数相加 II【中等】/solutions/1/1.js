/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const s1 = [],
    s2 = []
  while (l1) {
    s1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    s2.push(l2.val)
    l2 = l2.next
  }
  let carry = 0,
    head = null
  while (s1.length || s2.length || carry) {
    const sum = (s1.pop() || 0) + (s2.pop() || 0) + carry
    carry = Math.floor(sum / 10)
    const node = new ListNode(sum % 10)
    node.next = head
    head = node
  }
  return head
}
