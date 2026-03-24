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
var sortList = function (head) {
  if (!head || !head.next) return head
  // 找中点并断开
  let slow = head,
    fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  const mid = slow.next
  slow.next = null
  // 递归排序左右两半
  const left = sortList(head)
  const right = sortList(mid)
  // 合并两个有序链表
  const dummy = new ListNode(0)
  let cur = dummy,
    l = left,
    r = right
  while (l && r) {
    if (l.val <= r.val) {
      cur.next = l
      l = l.next
    } else {
      cur.next = r
      r = r.next
    }
    cur = cur.next
  }
  cur.next = l || r
  return dummy.next
}
