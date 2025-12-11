# [0344. 反转字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0344.%20%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🎯 s.2 - 双指针](#3--s2---双指针)
- [4. 🎯 s.3 - 递归](#4--s3---递归)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-string/)

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `s` 的形式给出。

不要给另外的数组分配额外的空间，你必须 [原地][1] 修改输入数组、使用 O(1) 的额外空间解决这一问题。

---

示例 1：

```txt
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

---

示例 2：

```txt
输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

---

提示：

- `1 <= s.length <= 10^5`
- `s[i]` 都是 [ASCII](https://baike.baidu.com/item/ASCII) 码表中的可打印字符

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度，reverse() 方法需要遍历数组
- 空间复杂度：$O(1)$，原地反转数组

解题思路：

- 直接使用 JavaScript 内置的 reverse() 方法反转数组
- 该方法会原地修改数组，符合题目要求

## 3. 🎯 s.2 - 双指针

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-16-20-17-45.png)

::: code-group

<<< ./solutions/2/1.js

:::

- 时间复杂度：$O(n)$，遍历字符串一半的长度
- 空间复杂度：$O(1)$，原地修改数组

解题思路：

- 使用双指针从两端向中间移动
- `left` 从 0 开始，`right` 从末尾开始
- 交换 `left` 和 `right` 位置的字符，然后移动指针
- 当 `left >= right` 时停止，完成反转

## 4. 🎯 s.3 - 递归

::: code-group

<<< ./solutions/3/1.js

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度，需要递归处理每一对字符
- 空间复杂度：$O(n)$，递归调用栈的深度为 n/2

解题思路：

- 使用递归实现双指针的逻辑
- 每次递归交换左右指针位置的字符，然后递归处理内层子数组
- 当左指针大于右指针时停止递归

## 5. 🔗 引用

- [百度百科 - 原地算法][1]
- [mdn Array.prototype.reverse()][2]

[1]: https://baike.baidu.com/item/原地算法
[2]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
