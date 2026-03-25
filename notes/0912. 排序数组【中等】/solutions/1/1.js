/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const merge = (arr, l, m, r) => {
    const tmp = arr.slice(l, r + 1)
    let i = 0,
      j = m - l + 1,
      k = l
    while (i <= m - l && j <= r - l) {
      arr[k++] = tmp[i] <= tmp[j] ? tmp[i++] : tmp[j++]
    }
    while (i <= m - l) arr[k++] = tmp[i++]
    while (j <= r - l) arr[k++] = tmp[j++]
  }
  const sort = (arr, l, r) => {
    if (l >= r) return
    const m = (l + r) >> 1
    sort(arr, l, m)
    sort(arr, m + 1, r)
    merge(arr, l, m, r)
  }
  sort(nums, 0, nums.length - 1)
  return nums
}
