/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 创建虚拟头节点，简化边界处理
  const dummy = new ListNode(0)
  dummy.next = head

  let prev = dummy
  let current = head

  while (current !== null) {
    if (current.val === val) {
      // 移除当前节点
      prev.next = current.next
    } else {
      // 移动 prev 指针
      prev = current
    }
    current = current.next
  }

  return dummy.next
}
