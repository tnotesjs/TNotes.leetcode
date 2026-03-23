# [0049. 字母异位词分组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0049.%20%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E5%88%86%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 哈希表分组](#2--s1---排序--哈希表分组)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/group-anagrams/)

给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

---

示例 1：

```txt
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
解释：
- 在 strs 中没有字符串可以通过重新排列来形成 `"bat"`。
- 字符串 `"nat"` 和 `"tan"` 是字母异位词，因为它们可以重新排列以形成彼此。
- 字符串 `"ate"`，`"eat"`和 `"tea"` 是字母异位词，因为它们可以重新排列以形成彼此。
```

示例 2：

```txt
输入: strs = [""]
输出: [[""]]
```

示例 3：

```txt
输入: strs = ["a"]
输出: [["a"]]
```

---

提示：

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` 仅包含小写字母

## 2. 🎯 s.1 - 排序 + 哈希表分组

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \cdot k \log k)$，其中 $n$ 是字符串数量，$k$ 是字符串的最大长度，每个字符串排序需 $O(k \log k)$
- 空间复杂度：$O(n \cdot k)$，哈希表存储所有字符串及其排序后的 key

算法思路：

- 互为字母异位词的字符串，排序后结果相同，因此用排序后的字符串作为哈希表的 key
- 遍历每个字符串，将其排序得到 key，追加到哈希表对应分组中
- 最终返回哈希表所有值（即各分组列表）
