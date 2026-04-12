/**
 * Definition for singly-linked list.
 * function ListNode(val, next) { this.val = (val===undefined ? 0 : val); this.next = (next===undefined ? null : next); }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head)
  let fast = dummy
  let slow = dummy

  // fast 先走 n + 1 步
  for (let i = 0; i <= n; i++) fast = fast.next

  // fast 和 slow 同步前进，直到 fast 到达末尾
  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  // slow.next 即为待删除节点
  slow.next = slow.next.next
  return dummy.next
}
