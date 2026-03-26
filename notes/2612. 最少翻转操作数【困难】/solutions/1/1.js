/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function (n, p, banned, k) {
  const ans = new Array(n).fill(-1)
  ans[p] = 0
  const banSet = new Set(banned)

  // 用两个有序集合（偶数和奇数位置）模拟
  // 用链表模拟有序集合：每次取出范围内的元素后删除
  const nxt = new Array(n + 2) // nxt[i] 表示 i 后面第一个未访问的同奇偶性位置
  for (let i = 0; i <= n + 1; i++) nxt[i] = i

  const find = (x) => (nxt[x] === x ? x : (nxt[x] = find(nxt[x])))
  const remove = (x) => {
    nxt[x] = x + 2
  }

  // 初始化：删除 banned 和 p
  for (const b of banned) remove(b)
  remove(p)

  let queue = [p]
  while (queue.length) {
    const next = []
    for (const i of queue) {
      // 翻转长度为 k 的子数组，位置 i 可以移动到的范围
      const lo = Math.max(i - k + 1, k - 1 - i)
      const hi = Math.min(i + k - 1, 2 * n - k - 1 - i)
      // lo 和 hi 与 i 的奇偶性相同当 k 为奇，不同当 k 为偶
      let j = find(lo)
      while (j <= hi) {
        ans[j] = ans[i] + 1
        remove(j)
        next.push(j)
        j = find(j)
      }
    }
    queue = next
  }
  return ans
}
