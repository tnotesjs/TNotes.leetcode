# [1290. 二进制链表转整数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1290.%20%E4%BA%8C%E8%BF%9B%E5%88%B6%E9%93%BE%E8%A1%A8%E8%BD%AC%E6%95%B4%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/convert-binary-number-in-a-linked-list-to-integer/)

给你一个单链表的引用结点 `head`。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。

请你返回该链表所表示数字的 **十进制值** 。

**最高位** 在链表的头部。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-20-13-56.png)

```txt
输入：head = [1,0,1]
输出：5
解释：二进制数 (101) 转化为十进制数 (5)
```

- **示例 2：**

```txt
输入：head = [0]
输出：0
```

---

**提示：**

- 链表不为空。
- 链表的结点总数不超过 `30`。
- 每个结点的值不是 `0` 就是 `1`。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
