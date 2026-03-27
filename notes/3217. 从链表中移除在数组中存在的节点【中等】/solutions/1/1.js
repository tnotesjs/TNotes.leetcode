/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
  const set = new Set(nums)
  const dummy = new ListNode(0, head)
  let curr = dummy
  while (curr.next) {
    if (set.has(curr.next.val)) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return dummy.next
}
