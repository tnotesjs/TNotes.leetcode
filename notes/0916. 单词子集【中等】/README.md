# [0916. 单词子集【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0916.%20%E5%8D%95%E8%AF%8D%E5%AD%90%E9%9B%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 最大频次合并](#2--s1---最大频次合并)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/word-subsets/)

给你两个字符串数组 `words1` 和 `words2`。

现在，如果 `b` 中的每个字母都出现在 `a` 中，包括重复出现的字母，那么称字符串 `b` 是字符串 `a` 的 子集。

- 例如，`"wrr"` 是 `"warrior"` 的子集，但不是 `"world"` 的子集。

如果对 `words2` 中的每一个单词 `b`，`b` 都是 `a` 的子集，那么我们称 `words1` 中的单词 `a` 是 通用单词。

以数组形式返回 `words1` 中所有的 通用 单词。你可以按 任意顺序 返回答案。

---

示例 1：

```txt
输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
输出：["facebook","google","leetcode"]
```

示例 2：

```txt
输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["lc","eo"]
输出：["leetcode"]
```

示例 3：

```txt
输入：words1 = ["acaac","cccbb","aacbb","caacc","bcbbb"], words2 = ["c","cc","b"]
输出：["cccbb"]
```

---

提示：

- `1 <= words1.length, words2.length <= 10^4`
- `1 <= words1[i].length, words2[i].length <= 10`
- `words1[i]` 和 `words2[i]` 仅由小写英文字母组成
- `words1` 中的所有字符串 互不相同

## 2. 🎯 s.1 - 最大频次合并

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N_1 \times L_1 + N_2 \times L_2)$，其中 $N_1, L_1, N_2, L_2$ 分别是两个数组的长度和平均字符串长度
- 空间复杂度：$O(1)$，只使用了固定大小（26）的字符频次数组

算法思路：

- 将 `words2` 中所有单词的字符频次合并为一个最大频次表 `maxFreq`，即每个字符取所有单词中出现次数的最大值
- 遍历 `words1`，对每个单词统计字符频次，检查是否每个字符的出现次数都不小于 `maxFreq` 中的对应值
- 满足条件的单词加入结果
