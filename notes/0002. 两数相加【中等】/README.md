# [0002. 两数相加【中等】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/0002.%20%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 💻 solutions.1 - 模拟法](#2--solutions1---模拟法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/add-two-numbers)

给你两个  **非空** 的链表，表示两个非负的整数。它们每位数字都是按照  **逆序**  的方式存储的，并且每个节点只能存储  **一位**  数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0  开头。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-06-01-22-52-32.png)

```txt
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

- **示例 2：**

```txt
输入：l1 = [0], l2 = [0]
输出：[0]
```

- **示例 3：**

```txt
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

---

**提示：**

- 每个链表中的节点数在范围 `[1, 100]` 内
- `0 <= Node.val <= 9`
- 题目数据保证列表表示的数字不含前导零

:::

## 2. 💻 solutions.1 - 模拟法

::: swiper

![1](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-06-01-23-57-11.png)

![2](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-06-01-23-57-18.png)

![3](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-06-01-23-57-25.png)

![4](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-06-01-23-57-33.png)

:::

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(max(m, n))$
- 空间复杂度：$O(max(m, n))$ 或 $O(max(m, n) + 1)$
  - 该算法会构建一个新的链表作为返回值。
  - 新链表的长度最多为 `max(m, n) + 1`（当最后有进位时）。
  - 这部分空间与输入规模相关。
- 头指针 `head` 指向低位。
- 尾指针 `tail` 指向高位。
- 由于输入的两个链表都是逆序存储数字的位数的，因此两个链表中同一位置的数字可以直接相加。
- 如果两个链表的长度不同，则可以认为长度短的链表的后面有若干个 `0`。
- 可以同时遍历两个链表，逐位计算它们的和，并与当前位置的进位值相加。
