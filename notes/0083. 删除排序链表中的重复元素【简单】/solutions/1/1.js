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
  // 如果链表为空，直接返回
  if (!head) return head

  // 使用当前节点指针遍历链表
  let current = head

  // 遍历链表直到最后一个节点
  while (current.next) {
    // 如果当前节点值与下一个节点值相同，则跳过下一个节点
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      // 否则移动到下一个节点
      current = current.next
    }
  }

  return head
}
