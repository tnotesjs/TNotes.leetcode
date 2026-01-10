/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const maxV = 1000
  const cnt = new Array(maxV + 1).fill(0)
  for (let v of arr1) cnt[v]++
  const res = []
  // 先按 arr2 的顺序取出
  for (let v of arr2) {
    while (cnt[v] > 0) {
      res.push(v)
      cnt[v]--
    }
  }
  // 再输出剩余元素（升序）
  for (let v = 0; v <= maxV; v++) {
    while (cnt[v] > 0) {
      res.push(v)
      cnt[v]--
    }
  }
  return res
}
