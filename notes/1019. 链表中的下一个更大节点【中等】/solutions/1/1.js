/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  const vals = []
  let cur = head
  while (cur) {
    vals.push(cur.val)
    cur = cur.next
  }
  const n = vals.length
  const res = new Array(n).fill(0)
  const stack = [] // index stack
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && vals[stack[stack.length - 1]] < vals[i]) {
      res[stack.pop()] = vals[i]
    }
    stack.push(i)
  }
  return res
}
