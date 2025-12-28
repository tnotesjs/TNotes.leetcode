# [1344. 时钟指针的夹角【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1344.%20%E6%97%B6%E9%92%9F%E6%8C%87%E9%92%88%E7%9A%84%E5%A4%B9%E8%A7%92%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/angle-between-hands-of-a-clock/)

给你两个数 `hour` 和 `minutes`。请你返回在时钟上，由给定时间的时针和分针组成的较小角的角度（60 单位制）。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-42-59.png)

```txt
输入：hour = 12, minutes = 30
输出：165
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-43-05.png)

```txt
输入：hour = 3, minutes = 30
输出；75
```

- 示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-43-14.png)

```txt
输入：hour = 3, minutes = 15
输出：7.5
```

- 示例 4：

```txt
输入：hour = 4, minutes = 50
输出：155
```

- 示例 5：

```txt
输入：hour = 12, minutes = 0
输出：0
```

---

提示：

- `1 <= hour <= 12`
- `0 <= minutes <= 59`
- 与标准答案误差在 `10^-5` 以内的结果都被视为正确结果。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
