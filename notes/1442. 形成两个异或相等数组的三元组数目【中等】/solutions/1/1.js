/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  const n = arr.length
  // a == b 等价于 arr[i]^...^arr[k] == 0
  // 即前缀异或 prefix[i] == prefix[k+1]
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] ^ arr[i]
  let count = 0
  for (let i = 0; i < n; i++) {
    for (let k = i + 1; k < n; k++) {
      if (prefix[i] === prefix[k + 1]) {
        count += k - i // j 可以在 i+1 到 k 之间
      }
    }
  }
  return count
}
