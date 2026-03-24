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
var deleteDuplicates = function (head) {
  const dummy = new ListNode(0, head)
  let prev = dummy

  while (prev.next) {
    let cur = prev.next
    // 跳过所有重复节点
    while (cur.next && cur.val === cur.next.val) cur = cur.next
    if (prev.next === cur) {
      prev = prev.next // 无重复，前进
    } else {
      prev.next = cur.next // 跳过所有重复节点
    }
  }
  return dummy.next
}
