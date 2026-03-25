/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function (num, k) {
  const arr = num.split('')
  const target = [...arr]
  // 找第 k 个下一个排列
  for (let i = 0; i < k; i++) nextPermutation(target)
  // 计算邻位交换次数
  let swaps = 0
  const cur = [...arr]
  for (let i = 0; i < cur.length; i++) {
    if (cur[i] !== target[i]) {
      let j = i + 1
      while (cur[j] !== target[i]) j++
      while (j > i) {
        ;[cur[j], cur[j - 1]] = [cur[j - 1], cur[j]]
        j--
        swaps++
      }
    }
  }
  return swaps
}

function nextPermutation(arr) {
  let i = arr.length - 2
  while (i >= 0 && arr[i] >= arr[i + 1]) i--
  if (i >= 0) {
    let j = arr.length - 1
    while (arr[j] <= arr[i]) j--
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  let l = i + 1,
    r = arr.length - 1
  while (l < r) {
    ;[arr[l], arr[r]] = [arr[r], arr[l]]
    l++
    r--
  }
}
