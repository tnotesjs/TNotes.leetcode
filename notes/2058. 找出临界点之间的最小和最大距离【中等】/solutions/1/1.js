/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let prev = head,
    cur = head.next,
    idx = 1
  let first = -1,
    last = -1,
    minDist = Infinity
  while (cur.next) {
    if (
      (cur.val > prev.val && cur.val > cur.next.val) ||
      (cur.val < prev.val && cur.val < cur.next.val)
    ) {
      if (first === -1) first = idx
      if (last !== -1) minDist = Math.min(minDist, idx - last)
      last = idx
    }
    prev = cur
    cur = cur.next
    idx++
  }
  if (first === last || first === -1) return [-1, -1]
  return [minDist, last - first]
}
