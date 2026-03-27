# [3217. 从链表中移除在数组中存在的节点【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3217.%20%E4%BB%8E%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%A7%BB%E9%99%A4%E5%9C%A8%E6%95%B0%E7%BB%84%E4%B8%AD%E5%AD%98%E5%9C%A8%E7%9A%84%E8%8A%82%E7%82%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/delete-nodes-from-linked-list-present-in-array/)

给你一个整数数组 `nums` 和一个链表的头节点 `head`。从链表中移除所有存在于 `nums` 中的节点后，返回修改后的链表的头节点。

---

示例 1：

输入：nums = [1,2,3], head = [1,2,3,4,5]

输出：[4,5]

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-22-47.png)

移除数值为 1, 2 和 3 的节点。

---

示例 2：

输入：nums = [1], head = [1,2,1,2,1,2]

输出：[2,2,2]

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-22-54.png)

移除数值为 1 的节点。

---

示例 3：

输入：nums = [5], head = [1,2,3,4]

输出：[1,2,3,4]

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-23-02.png)

链表中不存在值为 5 的节点。

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `nums` 中的所有元素都是唯一的。
- 链表中的节点数在 `[1, 10^5]` 的范围内。
- `1 <= Node.val <= 10^5`
- 输入保证链表中至少有一个值没有在 `nums` 中出现过。

## 2. 🎯 s.1 - 哈希集合

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n + m)$，n 是数组长度，m 是链表长度
- 空间复杂度：$O(n)$，哈希集合

算法思路：

- 将 nums 转为 Set 以 O(1) 查找
- 用哑节点遍历链表，删除值在 Set 中的节点

