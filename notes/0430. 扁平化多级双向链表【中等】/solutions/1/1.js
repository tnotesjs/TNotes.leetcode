/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let cur = head
  while (cur) {
    if (cur.child) {
      let next = cur.next
      let child = cur.child
      cur.next = child
      child.prev = cur
      cur.child = null
      let tail = child
      while (tail.next) tail = tail.next
      tail.next = next
      if (next) next.prev = tail
    }
    cur = cur.next
  }
  return head
}
