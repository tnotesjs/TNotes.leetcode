/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let len = 0,
    cur = head
  while (cur) {
    len++
    cur = cur.next
  }
  const size = Math.floor(len / k),
    extra = len % k
  const res = new Array(k).fill(null)
  cur = head
  for (let i = 0; i < k && cur; i++) {
    res[i] = cur
    const partSize = size + (i < extra ? 1 : 0)
    for (let j = 1; j < partSize; j++) cur = cur.next
    const next = cur.next
    cur.next = null
    cur = next
  }
  return res
}
