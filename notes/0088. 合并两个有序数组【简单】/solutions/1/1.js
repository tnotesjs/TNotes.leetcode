/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 初始化三个指针
  let p1 = m - 1 // 指向 nums1 有效元素的末尾
  let p2 = n - 1 // 指向 nums2 的末尾
  let p = m + n - 1 // 指向 nums1 的末尾

  // 从后向前遍历，直到其中一个数组被完全处理
  while (p1 >= 0 && p2 >= 0) {
    // 将较大的元素放在 nums1 的末尾
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }
    p--
  }

  // 如果 nums2 中还有剩余元素，将它们复制到 nums1 的前面
  // 如果 nums1 有剩余，则它们已经在正确的位置，无需操作
  while (p2 >= 0) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }
}
