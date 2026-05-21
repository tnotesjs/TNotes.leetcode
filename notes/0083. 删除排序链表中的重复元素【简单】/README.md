# [0083. 删除排序链表中的重复元素【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0083.%20%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-duplicates-from-sorted-list)

给定一个已排序的链表的头 `head`， _删除所有重复的元素，使每个元素只出现一次_。返回 _已排序的链表_。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-17-48.png)

```txt
输入：head = [1,1,2]
输出：[1,2]
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-21-12-17-52.png)

```txt
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

---

提示：

- 链表中节点数目在范围 `[0, 300]` 内
- `-100 <= Node.val <= 100`
- 题目数据保证链表已经按升序 排列

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
