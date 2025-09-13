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
  const values = []
  let current = head

  // 将链表值存储到数组中
  while (current) {
    values.push(current.val)
    current = current.next
  }

  // 使用双指针判断数组是否为回文
  let left = 0
  let right = values.length - 1

  while (left < right) {
    if (values[left] !== values[right]) {
      return false
    }
    left++
    right--
  }

  return true
}
