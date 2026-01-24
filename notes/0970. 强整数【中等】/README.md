# [0970. 强整数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0970.%20%E5%BC%BA%E6%95%B4%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 枚举](#2--s1---枚举)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/powerful-integers/)

给定三个整数 `x` 、 `y` 和 `bound`，返回值小于或等于 `bound` 的所有强整数组成的列表。

如果某一整数可以表示为 `x^i + y^j`，其中整数 `i >= 0` 且 `j >= 0`，那么我们认为该整数是一个强整数。

你可以按任何顺序返回答案。在你的回答中，每个值最多出现一次。

---

示例 1：

```txt
输入：x = 2, y = 3, bound = 10
输出：[2,3,4,5,7,9,10]

解释：
2 = 20 + 30
3 = 21 + 30
4 = 20 + 31
5 = 21 + 31
7 = 22 + 31
9 = 23 + 30
10 = 20 + 32
```

---

示例 2：

```txt
输入：x = 3, y = 5, bound = 15
输出：[2,4,6,8,10,14]
```

---

提示：

- `1 <= x, y <= 100`
- `0 <= bound <= 10^6`

## 2. 🎯 s.1 - 枚举

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(\log^2 bound)$，最多枚举 $O(\log bound)$ 个 i 和 $O(\log bound)$ 个 j
- 空间复杂度：$O(\log^2 bound)$，哈希集合最多存储 $O(\log^2 bound)$ 个不同的强整数

算法思路：

- 枚举范围：枚举所有可能的 i 和 j 值，使得 $x^i + y^j \leq bound$
- 上界计算：对于 x > 1，i 的上界为 $\lfloor \log_x(bound) \rfloor + 1$；对于 x = 1，只需考虑 i = 0
- 哈希去重：使用 Set 存储所有满足条件的和，自动去除重复值
- 特殊处理：当 x = 1 或 y = 1 时，幂次不变，只需枚举一次即可
- 提前终止：当 $x^i > bound$ 或 $x^i + y^j > bound$ 时，提前跳出循环
- 结果返回：将 Set 转换为数组返回
