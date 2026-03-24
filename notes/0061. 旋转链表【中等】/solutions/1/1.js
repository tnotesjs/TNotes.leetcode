/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head

  // 计算链表长度，并找到尾节点
  let len = 1
  let tail = head
  while (tail.next) {
    tail = tail.next
    len++
  }

  k %= len
  if (k === 0) return head

  tail.next = head // 尾节点接头，形成环

  // 找到新的尾节点（从 head 走 len - k - 1 步）
  let newTail = head
  for (let i = 0; i < len - k - 1; i++) newTail = newTail.next

  const newHead = newTail.next
  newTail.next = null // 断开环
  return newHead
}
