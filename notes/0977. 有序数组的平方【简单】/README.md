# [0977. 有序数组的平方【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0977.%20%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法 - 调用原生 API - map、sort](#2--s1---暴力解法---调用原生-api---mapsort)
- [3. 🎯 s.2 - 双指针](#3--s2---双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/squares-of-a-sorted-array)

给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序。

**示例 1：**

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

**示例 2：**

```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

**提示：**

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` 已按 **非递减顺序** 排序

**进阶：**

- 请你设计时间复杂度为 `O(n)` 的算法解决本问题


## 2. 🎯 s.1 - 暴力解法 - 调用原生 API - map、sort

```js
var sortedSquares = function (nums) {
  return nums.map((item) => item * item).sort((a, b) => a - b)
}
```

## 3. 🎯 s.2 - 双指针

```js
var sortedSquares = function (nums) {
  const result = []
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    const l_num = Math.abs(nums[l])
    const r_num = Math.abs(nums[r])
    if (l_num > r_num) {
      result.unshift(l_num * l_num)
      l++
    } else {
      result.unshift(r_num * r_num)
      r--
    }
  }
  return result
}
```

- 实现思路：
  - 提前准备好一个数组 result，用于存放最终的结果数据；
  - 从两端向中间依次遍历数组 nums 的每一项，由于数组是升序排序的，所以平方之后的，从两端到中间，必然是由大到小；
  - 依次将偏大的成员插入到 result 的头部，随后向中间偏移，直到两指针碰撞，最后将结果 result 给返回即可；
- 🤔 问：在这种解法中，将 `while (l <= r) { ... }` 改为 `while (l < r) { ... }` 可以吗？
  - 不行。
  - 每次 while 循环遍历一遍，left 或者 right 指针挪动一步，为了确保每个元素都被遍历到，循环条件不能改为 `l < r`，否则会漏掉一个元素（俩指针相撞 `l == r` 的时候）。
