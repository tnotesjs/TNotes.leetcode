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
var sortList = function (head) {
  if (!head || !head.next) return head

  // 计算链表长度
  let len = 0
  for (let p = head; p; p = p.next) len++

  const dummy = new ListNode(0, head)

  for (let size = 1; size < len; size *= 2) {
    let prev = dummy
    let cur = dummy.next

    while (cur) {
      // 切出第一段长度为 size 的子链表
      const l1 = cur
      const l2 = split(l1, size)
      cur = split(l2, size) // cur 指向剩余部分

      // 合并两段并接到 prev 后面
      prev = merge(l1, l2, prev)
    }
  }

  return dummy.next
}

// 将链表从第 size 个节点后切断，返回后半部分的头
function split(head, size) {
  if (!head) return null
  for (let i = 1; head.next && i < size; i++) {
    head = head.next
  }
  const rest = head.next
  head.next = null
  return rest
}

// 合并两个有序链表，接到 prev 后面，返回合并后的尾节点
function merge(l1, l2, prev) {
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 || l2
  while (prev.next) prev = prev.next
  return prev
}
