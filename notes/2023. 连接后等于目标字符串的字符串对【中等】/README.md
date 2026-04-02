# [2023. 连接后等于目标字符串的字符串对【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2023.%20%E8%BF%9E%E6%8E%A5%E5%90%8E%E7%AD%89%E4%BA%8E%E7%9B%AE%E6%A0%87%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AF%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表 + 枚举前后缀](#2--s1---哈希表--枚举前后缀)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/)

给你一个 数字 字符串数组 `nums` 和一个 数字 字符串 `target`，请你返回 `nums[i] + nums[j]` （两个字符串连接）结果等于 `target` 的下标 `(i, j)` （需满足 `i != j`）的数目。

---

示例 1：

```txt
输入：nums = ["777","7","77","77"], target = "7777"
输出：4
解释：符合要求的下标对包括：
- (0, 1)："777" + "7"
- (1, 0)："7" + "777"
- (2, 3)："77" + "77"
- (3, 2)："77" + "77"
```

示例 2：

```txt
输入：nums = ["123","4","12","34"], target = "1234"
输出：2
解释：符合要求的下标对包括
- (0, 1)："123" + "4"
- (2, 3)："12" + "34"
```

示例 3：

```txt
输入：nums = ["1","1","1"], target = "11"
输出：6
解释：符合要求的下标对包括
- (0, 1)："1" + "1"
- (1, 0)："1" + "1"
- (0, 2)："1" + "1"
- (2, 0)："1" + "1"
- (1, 2)："1" + "1"
- (2, 1)："1" + "1"
```

---

提示：

- `2 <= nums.length <= 100`
- `1 <= nums[i].length <= 100`
- `2 <= target.length <= 100`
- `nums[i]` 和 `target` 只包含数字。
- `nums[i]` 和 `target` 不含有任何前导 0。

## 2. 🎯 s.1 - 哈希表 + 枚举前后缀

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + L)$，其中 n 是数组长度，L 是 target 的长度
- 空间复杂度：$O(n)$，哈希表存储字符串频次

算法思路：

- 用哈希表统计数组中每个字符串的出现次数
- 枚举 target 的所有分割点，将 target 拆为前缀 prefix 和后缀 suffix
- 若 prefix 和 suffix 相同则计数为 `cnt * (cnt - 1)`，否则为 `cnt(prefix) * cnt(suffix)`
