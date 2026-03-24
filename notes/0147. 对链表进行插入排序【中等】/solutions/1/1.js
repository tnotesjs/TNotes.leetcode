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
var insertionSortList = function (head) {
  const dummy = new ListNode(0)
  let cur = head
  while (cur) {
    const next = cur.next
    // 找到插入位置
    let prev = dummy
    while (prev.next && prev.next.val < cur.val) {
      prev = prev.next
    }
    cur.next = prev.next
    prev.next = cur
    cur = next
  }
  return dummy.next
}
