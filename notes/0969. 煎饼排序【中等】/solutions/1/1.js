/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  const result = []
  const n = arr.length

  // 翻转数组前 k 个元素
  const flip = (k) => {
    let left = 0,
      right = k - 1
    while (left < right) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  // 从后向前，每次将最大值放到正确位置
  for (let i = n; i > 1; i--) {
    // 找到当前未排序部分的最大值索引
    let maxIndex = 0
    for (let j = 1; j < i; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j
      }
    }

    // 如果最大值已经在正确位置，跳过
    if (maxIndex === i - 1) continue

    // 如果最大值不在第一个位置，先翻转将其移到第一个位置
    if (maxIndex !== 0) {
      result.push(maxIndex + 1)
      flip(maxIndex + 1)
    }

    // 翻转整个未排序部分，将最大值移到正确位置
    result.push(i)
    flip(i)
  }

  return result
}
