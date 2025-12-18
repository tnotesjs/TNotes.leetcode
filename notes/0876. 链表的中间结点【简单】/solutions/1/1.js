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
var middleNode = function (head) {
  // 获取到链表的总长度
  let len = 1,
    root = head
  while (head.next) {
    len++
    head = head.next
  }
  // 找中点
  for (let i = 0; i < Math.floor(len / 2); i++) {
    root = root.next
  }
  return root
}
