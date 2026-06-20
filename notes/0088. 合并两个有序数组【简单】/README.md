# [0088. 合并两个有序数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0088.%20%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🎯 s.2 - 尾插法](#3--s2---尾插法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/merge-sorted-array)

给你两个按非递减顺序排列的整数数组 `nums1` 和 `nums2`，另有两个整数 `m` 和 `n`，分别表示 `nums1` 和 `nums2` 中的元素数目。

请你合并 `nums2` 到 `nums1` 中，使合并后的数组同样按非递减顺序排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 `nums1` 中。为了应对这种情况，`nums1` 的初始长度为 `m + n`，其中前 `m` 个元素表示应合并的元素，后 `n` 个元素为 `0`，应忽略。`nums2` 的长度为 `n`。

示例 1：

```
输入：
  nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3
输出：[1, 2, 2, 3, 5, 6]
```

解释：

- 需要合并 [1, 2, 3] 和 [2, 5, 6]。
- 合并结果是 [1, 2, 2, 3, 5, 6]，其中斜体加粗标注的为 nums1 中的元素。

---

示例 2：

```
输入：
  nums1 = [1],
  m = 1,
  nums2 = [],
  n = 0
输出：[1]
```

解释：

- 需要合并 [1] 和 []。
- 合并结果是 [1]。

---

示例 3：

```
输入：
  nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1
输出：[1]
```

解释：

- 需要合并的数组是 [] 和 [1]。
- 合并结果是 [1]。
- 注意，因为 m = 0，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。

---

提示：

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

进阶：你可以设计实现一个时间复杂度为 `O(m + n)` 的算法解决此问题吗？

## 2. 🎯 s.1 - 暴力解法

```js
/**
 * 22-09-02
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  ;[...nums1.slice(0, m), ...nums2.slice(0, n)] // 1. 切片合并
    .sort((a, b) => a - b) // 2. 排序
    .forEach((it, i) => (nums1[i] = it)) // 3. 重新给 nums1 赋值
}
```

- 注意：
  - Do not return anything, modify nums1 in-place instead.
  - 头部注释信息中强调，不需要返回任何内容，直接基于 nums1 原地修改即可。

## 3. 🎯 s.2 - 尾插法

```js
/**
 * 22-09-03
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 处理特殊情况
  if (n < 1) return
  if (m < 1) {
    for (let i = 0; i < nums2.length; i++) nums1[i] = nums2[i]
    return
  }

  let k = m + n - 1, // k 指向 nums1.length - 1 也就是 nums1 的结尾
    i = m - 1, // i 指向 nums1 中参与合并的片段的结尾
    j = n - 1 // j 指向 nums2 中参与合并的片段的结尾

  while (k >= 0) {
    if (nums1[i] > nums2[j] || j < 0) nums1[k--] = nums1[i--]
    if (nums2[j] >= nums1[i] || i < 0) nums1[k--] = nums2[j--]
  }
}
```

- 执行流程：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-10-20-55-40.png)
- `if ((nums1[i] > nums2[j]) || (j < 0)) nums1[k--] = nums1[i--]`
  - 如果 `nums1[i]` 大于 `nums2[j]` 或者 `nums2` 已经查完了，那么使用 `nums1[i]` 跟 `nums1[k]` 交换，交换后俩指针往前挪一步。
- `if ((nums2[j] >= nums1[i]) || (i < 0)) nums1[k--] = nums2[j--]`
  - 如果 `nums2[j]` 大于等于 `nums1[i]` 或者 `nums1` 已经查完了，那么使用 `nums2[j]` 跟 `nums1[k]` 交换，交换后俩指针往前挪一步。
- 优化：
  - 可以适当对 while 的循环体做一些优化处理，省去一些不必要的比较。

```js
/**
 * 24-11-10
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 处理特殊情况
  if (n < 1) return
  if (m < 1) {
    for (let i = 0; i < nums2.length; i++) nums1[i] = nums2[i]
    return
  }

  let k = m + n - 1, // k 指向 nums1.length - 1 也就是 nums1 的结尾
    i = m - 1, // i 指向 nums1 中参与合并的片段的结尾
    j = n - 1 // j 指向 nums2 中参与合并的片段的结尾

  while (k >= 0) {
    // nums1[i] 和 nums2[j] 中，较大的成员跟 nums1[k] 交换。
    if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--]
    else nums1[k--] = nums2[j--]

    // 若某次交换后，发现 i 和 k 指向相同了，后续就没必要再处理了。
    if (i === k) return
  }
}
```
