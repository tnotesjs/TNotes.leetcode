/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  const set = new Set(nums)
  let res = 0,
    inComp = false
  let cur = head
  while (cur) {
    if (set.has(cur.val)) {
      if (!inComp) {
        res++
        inComp = true
      }
    } else {
      inComp = false
    }
    cur = cur.next
  }
  return res
}
