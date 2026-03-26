/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
  // 找支配元素
  const cnt = new Map()
  for (const v of nums) cnt.set(v, (cnt.get(v) || 0) + 1)
  let dom,
    domCnt = 0
  for (const [k, v] of cnt) {
    if (v > domCnt) {
      dom = k
      domCnt = v
    }
  }
  let leftCnt = 0
  const n = nums.length
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === dom) leftCnt++
    const leftLen = i + 1
    const rightLen = n - leftLen
    const rightCnt = domCnt - leftCnt
    if (leftCnt * 2 > leftLen && rightCnt * 2 > rightLen) return i
  }
  return -1
}
