# [0023. 合并 K 个升序链表【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0023.%20%E5%90%88%E5%B9%B6%20K%20%E4%B8%AA%E5%8D%87%E5%BA%8F%E9%93%BE%E8%A1%A8%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/merge-k-sorted-lists/)

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

---

示例 1：

```txt
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

示例 2：

```txt
输入：lists = []
输出：[]
```

示例 3：

```txt
输入：lists = [[]]
输出：[]
```

---

提示：

- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- `lists[i]` 按 升序 排列
- `lists[i].length` 的总和不超过 `10^4`

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
