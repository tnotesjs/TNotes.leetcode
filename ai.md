```js
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
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
// @lc code=end

// #region 1
/* 
数组解法（易理解）

- 时间复杂度：O(n)，需要遍历链表两次
- 空间复杂度：O(n)，需要额外数组存储节点值
- 遍历链表，将所有节点值存储到数组中。
- 使用双指针从数组两端向中间比较，判断是否为回文。
*/
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
// #endregion

// #region 2
/* 
快慢指针 + 翻转链表（空间复杂度 O(1)）

- 时间复杂度：O(n)，只需要遍历链表常数次
- 空间复杂度：O(1)，只使用常数额外空间
- 找中点：
  - 使用快慢指针，快指针每次走两步，慢指针每次走一步
  - 当快指针到达末尾时，慢指针正好在中点位置
- 翻转后半部分：
  - 将链表从中点分开，翻转后半部分链表
- 比较两部分：
  - 同时遍历前半部分和翻转后的后半部分，比较对应节点值
- 恢复链表（可选）：
  - 如果需要保持原链表结构，可以再次翻转后半部分进行恢复
*/

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
// #endregion

// #region 3
/* 

*/

// #endregion

// #region 4
/* 

*/

// #endregion
```
