/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let prev = list1
  for (let i = 0; i < a - 1; i++) prev = prev.next
  let after = prev
  for (let i = 0; i <= b - a + 1; i++) after = after.next
  prev.next = list2
  let tail = list2
  while (tail.next) tail = tail.next
  tail.next = after
  return list1
}
