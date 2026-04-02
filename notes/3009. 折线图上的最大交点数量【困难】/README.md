# [3009. 折线图上的最大交点数量【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3009.%20%E6%8A%98%E7%BA%BF%E5%9B%BE%E4%B8%8A%E7%9A%84%E6%9C%80%E5%A4%A7%E4%BA%A4%E7%82%B9%E6%95%B0%E9%87%8F%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - KMP + 双指针](#2--s1---kmp--双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-beautiful-indices-in-the-given-array-ii/)

给你一个下标从 0 开始的字符串 `s` 、字符串 `a` 、字符串 `b` 和一个整数 `k`。

如果下标 `i` 满足以下条件，则认为它是一个 美丽下标 ：

- `0 <= i <= s.length - a.length`
- `s[i..(i + a.length - 1)] == a`
- 存在下标 `j` 使得：
  - `0 <= j <= s.length - b.length`
  - `s[j..(j + b.length - 1)] == b`
  - `|j - i| <= k`

以数组形式按 从小到大排序 返回美丽下标。

---

示例 1：

```txt
输入：s = "isawsquirrelnearmysquirrelhouseohmy", a = "my", b = "squirrel", k = 15
输出：[16,33]
解释：存在 2 个美丽下标：[16,33]。
- 下标 16 是美丽下标，因为 s[16..17] == "my"，且存在下标 4，满足 s[4..11] == "squirrel" 且 |16 - 4| <= 15。
- 下标 33 是美丽下标，因为 s[33..34] == "my"，且存在下标 18，满足 s[18..25] == "squirrel" 且 |33 - 18| <= 15。
因此返回 [16,33] 作为结果。
```

示例 2：

```txt
输入：s = "abcd", a = "a", b = "a", k = 4
输出：[0]
解释：存在 1 个美丽下标：[0]。
- 下标 0 是美丽下标，因为 s[0..0] == "a"，且存在下标 0，满足 s[0..0] == "a" 且 |0 - 0| <= 4。
因此返回 [0] 作为结果。
```

---

提示：

- `1 <= k <= s.length <= 5 * 10^5`
- `1 <= a.length, b.length <= 5 * 10^5`
- `s`、`a`、和 `b` 只包含小写英文字母。

## 2. 🎯 s.1 - KMP + 双指针

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N + M_1 + M_2)$，其中 N 为字符串 s 的长度，$M_1$、$M_2$ 分别为 a、b 的长度
- 空间复杂度：$O(N + M_1 + M_2)$，存储 KMP 失败函数和匹配位置数组

算法思路：

- 用 KMP 算法分别找出字符串 a 和 b 在 s 中所有出现的位置，得到两个有序数组 posA 和 posB
- 遍历 posA，用双指针在 posB 中查找是否存在满足 `|posA[i] - posB[j]| <= k` 的匹配位置
- 由于 posA 和 posB 都是递增的，`posA[i] - k` 也是递增的，因此指针 j 只需单向移动
