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
var mergeNodes = function (head) {
  const dummy = new ListNode(0)
  let tail = dummy
  let cur = head.next // 跳过开头的 0
  let sum = 0
  while (cur) {
    if (cur.val === 0) {
      tail.next = new ListNode(sum)
      tail = tail.next
      sum = 0
    } else {
      sum += cur.val
    }
    cur = cur.next
  }
  return dummy.next
}
