/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null
  if (!head.next) return new TreeNode(head.val)

  // 快慢指针找中点，prev 记录中点前一个节点
  let slow = head,
    fast = head,
    prev = null
  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  // 断开左半段
  prev.next = null

  const root = new TreeNode(slow.val)
  root.left = sortedListToBST(head)
  root.right = sortedListToBST(slow.next)
  return root
}
