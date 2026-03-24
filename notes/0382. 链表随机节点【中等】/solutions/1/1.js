/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head
}

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let res = 0,
    i = 1,
    node = this.head
  while (node) {
    // 蓄水池抽样：以 1/i 的概率选中当前节点
    if (Math.random() < 1 / i) res = node.val
    node = node.next
    i++
  }
  return res
}
