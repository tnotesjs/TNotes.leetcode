/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null // 新链表的头节点
  let tail = null // 新链表的尾节点
  let carry = 0 // 模拟逐位求和的进位

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + carry
    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    carry = Math.floor(sum / 10)

    // 移动指针，继续检查后续位
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  // 最后检查是否有新的进位
  if (carry > 0) tail.next = new ListNode(carry)

  return head
}
