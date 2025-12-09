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
var reverseList = function (head) {
  let prev = null
  let current = head

  while (current !== null) {
    // 保存下一个节点
    let next = current.next
    // 反转当前节点的指针
    current.next = prev
    // 移动指针
    prev = current
    current = next
  }

  return prev
}
