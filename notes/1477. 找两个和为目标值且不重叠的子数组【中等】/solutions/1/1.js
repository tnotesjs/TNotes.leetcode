/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  const n = arr.length
  const best = new Array(n).fill(Infinity) // best[i]: 以 i 或之前结尾的最短子数组长度
  let res = Infinity,
    sum = 0,
    left = 0
  for (let right = 0; right < n; right++) {
    sum += arr[right]
    while (sum > target) sum -= arr[left++]
    if (sum === target) {
      const len = right - left + 1
      if (left > 0 && best[left - 1] < Infinity)
        res = Math.min(res, len + best[left - 1])
      best[right] = Math.min(right > 0 ? best[right - 1] : Infinity, len)
    } else {
      best[right] = right > 0 ? best[right - 1] : Infinity
    }
  }
  return res === Infinity ? -1 : res
}
