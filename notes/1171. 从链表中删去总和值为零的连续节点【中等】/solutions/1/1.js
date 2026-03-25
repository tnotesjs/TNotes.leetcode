/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  const dummy = new ListNode(0, head)
  const map = new Map()
  let sum = 0
  for (let node = dummy; node; node = node.next) {
    sum += node.val
    map.set(sum, node)
  }
  sum = 0
  for (let node = dummy; node; node = node.next) {
    sum += node.val
    node.next = map.get(sum).next
  }
  return dummy.next
}
