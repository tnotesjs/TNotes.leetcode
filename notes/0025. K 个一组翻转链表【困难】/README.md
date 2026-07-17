# [0025. K 个一组翻转链表【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0025.%20K%20%E4%B8%AA%E4%B8%80%E7%BB%84%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-nodes-in-k-group/)

给你链表的头节点 `head`，每 `k` 个节点一组进行翻转，请你返回修改后的链表。

`k` 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 `k` 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-21-21-00.png)

```txt
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-21-21-08.png)

````txt
输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]  ```
````

---

提示：

- 链表中的节点数目为 `n`
- `1 <= k <= n <= 5000`
- `0 <= Node.val <= 1000`

进阶：你可以设计一个只用 `O(1)` 额外内存空间的算法解决此问题吗？

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
