/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const res = []
  let i = num.length - 1
  let carry = 0

  while (i >= 0 || k > 0) {
    const x = i >= 0 ? num[i] : 0
    const y = k % 10
    const sum = x + y + carry
    res.push(sum % 10)
    carry = Math.floor(sum / 10)
    k = Math.floor(k / 10)
    i--
  }

  if (carry) res.push(carry)
  res.reverse()
  return res
}

// --------------------------------------------
// 【补充说明】
// 🤔 为什么不直接使用 unshift 来维护 res，而是先用 push 最后再 reverse？
// --------------------------------------------
// unshift 比 push 操作昂贵得多！
// 可以对比两个版本的提交时间来查看差异。
// 也可以在浏览器调试工具中执行以下示例来对比：
/* 
const arr = []

console.time('push')
for (let i = 0; i < 1_000_000; i++) {
  arr.push(i)
}
console.timeEnd('push')

const arr2 = []
console.time('unshift')
for (let i = 0; i < 1_000_000; i++) {
  arr2.unshift(i)
}
console.timeEnd('unshift')
*/
// 实测结果参考：
// push: 6.7861328125 ms
// unshift: 36471.3720703125 ms
