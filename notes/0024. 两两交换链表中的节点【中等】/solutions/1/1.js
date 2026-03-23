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
var swapPairs = function (head) {
  const dummy = new ListNode(0, head)
  let cur = dummy

  while (cur.next && cur.next.next) {
    const first = cur.next // 第一个节点
    const second = cur.next.next // 第二个节点
    first.next = second.next // first 指向第二个节点后续
    second.next = first // second 指向 first
    cur.next = second // 前驱节点指向 second
    cur = first // 移动到下一对的前驱
  }

  return dummy.next
}
