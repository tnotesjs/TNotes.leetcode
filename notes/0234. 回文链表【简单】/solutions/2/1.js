/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true

  // 使用快慢指针找到链表中点
  let slow = head
  let fast = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // 翻转后半部分链表
  let secondHalf = reverseList(slow.next)

  // 比较前半部分和翻转后的后半部分
  let firstHalf = head
  let result = true

  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      result = false
      break
    }
    firstHalf = firstHalf.next
    secondHalf = secondHalf.next
  }

  return result
}

// 辅助函数：翻转链表
function reverseList(head) {
  let prev = null
  let current = head

  while (current) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}
