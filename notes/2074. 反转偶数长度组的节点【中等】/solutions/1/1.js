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
var reverseEvenLengthGroups = function (head) {
  // 收集所有节点值到数组
  const vals = []
  let cur = head
  while (cur) {
    vals.push(cur.val)
    cur = cur.next
  }
  let idx = 0,
    group = 1
  while (idx < vals.length) {
    const len = Math.min(group, vals.length - idx)
    if (len % 2 === 0) {
      // 反转这一段
      let l = idx,
        r = idx + len - 1
      while (l < r) {
        const tmp = vals[l]
        vals[l] = vals[r]
        vals[r] = tmp
        l++
        r--
      }
    }
    idx += len
    group++
  }
  cur = head
  for (let i = 0; i < vals.length; i++) {
    cur.val = vals[i]
    cur = cur.next
  }
  return head
}
