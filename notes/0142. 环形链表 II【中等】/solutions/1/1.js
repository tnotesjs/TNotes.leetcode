/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null
  }

  let slow = head
  let fast = head

  // 第一步：检测是否有环
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      break
    }
  }

  // 如果 fast 为 null，说明无环
  if (!fast || !fast.next) {
    return null
  }

  // 第二步：找环的入口
  fast = head
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow // 环入口
}
