# [2635. 转换数组中的每个元素【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2635.%20%E8%BD%AC%E6%8D%A2%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1](#2--s1)
- [3. 🫧 评价](#3--评价)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/apply-transform-over-each-element-in-array)

编写一个函数，这个函数接收一个整数数组 `arr` 和一个映射函数 `fn`，通过该映射函数返回一个新的数组。

返回数组的创建语句应为 `returnedArray[i] = fn(arr[i], i)`。

请你在不使用内置方法 `Array.map` 的前提下解决这个问题。

示例 1：

- 输入：`arr = [1,2,3], fn = function plusone(n) { return n + 1; }`
- 输出：`[2,3,4]`
- 解释：`const newArray = map(arr, plusone); // [2,3,4]` 此映射函数返回值是将数组中每个元素的值加 1。

示例 2：

- 输入：`arr = [1,2,3], fn = function plusI(n, i) { return n + i; }`
- 输出：`[1,3,5]`
- 解释：此映射函数返回值根据输入数组索引增加每个值。

示例 3：

- 输入：`arr = [10,20,30], fn = function constant() { return 42; }`
- 输出：`[42,42,42]`
- 解释：此映射函数返回值恒为 `42`。

提示：

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`
- `fn` 返回一个数

## 2. 🎯 s.1 - 遍历映射

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，遍历一次数组
- 空间复杂度：$O(n)$，结果数组的空间

算法思路：

- 遍历数组，对每个元素调用 `fn(arr[i], i)` 并将结果存入新数组的对应位置
- 本质上就是实现数组原生 API `Array.map`
