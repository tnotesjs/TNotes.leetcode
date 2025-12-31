/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  const arr = []
  for (const x of nums) {
    if (arr.length === 0 || arr[arr.length - 1] !== x) arr.push(x)
  }

  let ans = 0
  for (let i = 1; i + 1 < arr.length; i += 1) {
    if (
      (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
      (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
    ) {
      ans += 1
    }
  }
  return ans
}
