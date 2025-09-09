/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 如果其中一个链表为空，则不可能相交
  if (!headA || !headB) return null

  let pointerA = headA
  let pointerB = headB

  // 当两个指针不相等时继续循环
  while (pointerA !== pointerB) {
    // 如果pointerA到达末尾，则从headB开始
    pointerA = pointerA ? pointerA.next : headB
    // 如果pointerB到达末尾，则从headA开始
    pointerB = pointerB ? pointerB.next : headA
  }

  // 返回相交节点，如果没有相交则返回null
  return pointerA
}
// @lc code=end
