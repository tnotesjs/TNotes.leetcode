/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 边界情况：空链表或只有一个节点
  if (!head || !head.next) {
    return false
  }

  // 初始化快慢指针
  let slow = head
  let fast = head.next

  // 快慢指针遍历链表
  while (slow !== fast) {
    // 如果快指针到达链表末尾，说明无环
    if (!fast || !fast.next) {
      return false
    }
    // 移动指针
    slow = slow.next // 慢指针每次移动一步
    fast = fast.next.next // 快指针每次移动两步
  }

  // 如果快慢指针相遇，说明有环
  return true
}
