# [3200. 三角形的最大高度【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3200.%20%E4%B8%89%E8%A7%92%E5%BD%A2%E7%9A%84%E6%9C%80%E5%A4%A7%E9%AB%98%E5%BA%A6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-height-of-a-triangle/)

给你两个整数 `red` 和 `blue`，分别表示红色球和蓝色球的数量。你需要使用这些球来组成一个三角形，满足第 1 行有 1 个球，第 2 行有 2 个球，第 3 行有 3 个球，依此类推。

每一行的球必须是 **相同** 颜色，且相邻行的颜色必须 **不同**。

返回可以实现的三角形的 **最大** 高度。

---

- **示例 1：**

**输入：** red = 2, blue = 4

**输出：** 3

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-15-20.png)

上图显示了唯一可能的排列方式。

---

- **示例 2：**

**输入：** red = 2, blue = 1

**输出：** 2

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-15-26.png)

上图显示了唯一可能的排列方式。

---

- **示例 3：**

**输入：** red = 1, blue = 1

**输出：** 1

---

- **示例 4：**

**输入：** red = 10, blue = 1

**输出：** 2

**解释：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-15-39.png)

上图显示了唯一可能的排列方式。

---

**提示：**

- `1 <= red, blue <= 100`

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
