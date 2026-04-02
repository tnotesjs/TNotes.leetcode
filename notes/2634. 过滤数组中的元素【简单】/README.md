# [2634. 过滤数组中的元素【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2634.%20%E8%BF%87%E6%BB%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 遍历过滤](#2--s1---遍历过滤)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/filter-elements-from-array/)

给定一个整数数组 `arr` 和一个过滤函数 `fn`，并返回一个过滤后的数组 `filteredArr`。

`fn` 函数接受一个或两个参数：

- `arr[i]` - `arr` 中的数字
- `i` - `arr[i]` 的索引

`filteredArr` 应该只包含使表达式 `fn(arr[i], i)` 的值为 真值 的 `arr` 中的元素。真值 是指 `Boolean(value)` 返回参数为 `true` 的值。

请在不使用内置的 `Array.filter` 方法的情况下解决该问题。

示例 1：

- 输入：`arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }`
- 输出：`[20,30]`
- 解释：`const newArray = filter(arr, fn); // [20, 30]` 过滤函数过滤掉不大于 10 的值

示例 2：

- 输入：`arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }`
- 输出：`[1]`
- 解释：过滤函数 fn 也可以接受每个元素的索引。在这种情况下，过滤函数删除索引不为 0 的元素

示例 3：

- 输入：`arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }`
- 输出：`[-2,0,1,2]`
- 解释：像 `0` 这样的假值应被过滤掉

提示：

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`

## 2. 🎯 s.1 - 遍历过滤

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，遍历一次数组
- 空间复杂度：$O(n)$，结果数组占的空间

算法思路：

- 遍历数组，对每个元素调用 `fn(item, i)`
- 如果返回值为真值，则将该元素加入结果数组
