/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return
  // 找中点
  let slow = head,
    fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // 反转后半部分
  let prev = null,
    cur = slow.next
  slow.next = null
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  // 合并两个链表
  let l1 = head,
    l2 = prev
  while (l2) {
    const next1 = l1.next,
      next2 = l2.next
    l1.next = l2
    l2.next = next1
    l1 = next1
    l2 = next2
  }
}
