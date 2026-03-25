# [1286. 字母组合迭代器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1286.%20%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88%E8%BF%AD%E4%BB%A3%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/iterator-for-combination/)

请你设计一个迭代器类 `CombinationIterator`，包括以下内容：

- `CombinationIterator(string characters, int combinationLength)` 一个构造函数，输入参数包括：用一个 有序且字符唯一 的字符串 `characters`（该字符串只包含小写英文字母）和一个数字 `combinationLength`。
- 函数 _`next()`_，按 字典序 返回长度为 `combinationLength` 的下一个字母组合。
- 函数 _`hasNext()`_，只有存在长度为 `combinationLength` 的下一个字母组合时，才返回 `true`

---

示例 1：

```txt
输入:
["CombinationIterator", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[["abc", 2], [], [], [], [], [], []]
输出：
[null, "ab", true, "ac", true, "bc", false]
解释：
CombinationIterator iterator = new CombinationIterator("abc", 2); // 创建迭代器 iterator
iterator.next(); // 返回 "ab"
iterator.hasNext(); // 返回 true
iterator.next(); // 返回 "ac"
iterator.hasNext(); // 返回 true
iterator.next(); // 返回 "bc"
iterator.hasNext(); // 返回 false
```

---

提示：

- `1 <= combinationLength <= characters.length <= 15`
- `characters` 中每个字符都 不同
- 每组测试数据最多对 `next` 和 `hasNext` 调用 `10^4`次
- 题目保证每次调用函数 `next` 时都存在下一个字母组合。

## 2. 🎯 s.1 - 预计算组合

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：初始化 $O(C_n^k)$，next 和 hasNext 均 $O(1)$
- 空间复杂度：$O(C_n^k \times k)$，存储所有组合

算法思路：

- 构造时通过回溯预计算所有长度为 combinationLength 的组合，字典序存储
- next 每次返回下一个组合，hasNext 检查是否还有剩余组合
