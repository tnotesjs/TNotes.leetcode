/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  // 将链表值存入数组
  const vals = []
  let cur = head
  while (cur) {
    vals.push(cur.val)
    cur = cur.next
  }
  let res = 0
  const n = vals.length
  for (let i = 0; i < n / 2; i++) {
    res = Math.max(res, vals[i] + vals[n - 1 - i])
  }
  return res
}
