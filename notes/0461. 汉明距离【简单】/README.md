# [0461. 汉明距离【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0461.%20%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 异或求解](#2--s1---异或求解)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/hamming-distance/)

两个整数之间的 [汉明距离][1] 指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 `x` 和 `y`，计算并返回它们之间的汉明距离。

---

示例 1：

```txt
输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
```

示例 2：

```txt
输入：x = 3, y = 1
输出：1
```

---

提示：

- `0 <= x, y <= 2^31 - 1`

---

::: warning 注意

- 本题与 [2220. 转换数字的最少位翻转次数][2] 相同。

:::

## 2. 🎯 s.1 - 异或求解

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$，因为整数的二进制位数是固定的（32 位），最多循环 32 次
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

## 3. 🔗 引用

- [汉明距离][1]
  - 百度百科
- [2220. 转换数字的最少位翻转次数][2]

[1]: https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB
[2]: https://leetcode.cn/problems/minimum-bit-flips-to-convert-number/
