/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  let head, cur
  if (list1.val >= list2.val) {
    head = cur = list2
    list2 = list2.next
  } else {
    head = cur = list1
    list1 = list1.next
  }
  while (list1 && list2) {
    if (list1.val >= list2.val) {
      cur.next = list2
      cur = cur.next
      list2 = list2.next
    } else {
      cur.next = list1
      cur = cur.next
      list1 = list1.next
    }
  }
  cur.next = list1 ? list1 : list2
  return head
}
