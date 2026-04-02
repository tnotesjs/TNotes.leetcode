# [0955. 删列造序 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0955.%20%E5%88%A0%E5%88%97%E9%80%A0%E5%BA%8F%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心](#2--s1---贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/delete-columns-to-make-sorted-ii/)

给定由 `n` 个字符串组成的数组 `strs`，其中每个字符串长度相等。

选取一个删除索引序列，对于 `strs` 中的每个字符串，删除对应每个索引处的字符。

比如，有 `strs = ["abcdef", "uvwxyz"]`，删除索引序列 `{0, 2, 3}`，删除后 `strs` 为`["bef", "vyz"]`。

假设，我们选择了一组删除索引 `answer`，那么在执行删除操作之后，最终得到的数组的元素是按 字典序（`strs[0] <= strs[1] <= strs[2] ... <= strs[n - 1]`）排列的，然后请你返回 `answer.length` 的最小可能值。

---

示例 1：

```txt
输入：strs = ["ca","bb","ac"]
输出：1
解释：
删除第一列后，strs = ["a", "b", "c"]。
现在 strs 中元素是按字典排列的 (即，strs[0] <= strs[1] <= strs[2])。
我们至少需要进行 1 次删除，因为最初 strs 不是按字典序排列的，所以答案是 1。
```

示例 2：

```txt
输入：strs = ["xc","yb","za"]
输出：0
解释：
strs 的列已经是按字典序排列了，所以我们不需要删除任何东西。
注意 strs 的行不需要按字典序排列。
也就是说，strs[0][0] <= strs[0][1] <= ... 不一定成立。
```

示例 3：

```txt
输入：strs = ["zyx","wvu","tsr"]
输出：3
解释：
我们必须删掉每一列。
```

---

提示：

- `n == strs.length`
- `1 <= n <= 100`
- `1 <= strs[i].length <= 100`
- `strs[i]` 由小写英文字母组成

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times m)$，其中 n 是字符串数量，m 是字符串长度
- 空间复杂度：$O(n)$，标记数组

算法思路：

- 逐列检查，维护一个标记数组记录哪些相邻字符串对已经严格有序
- 若加入当前列后，存在未严格有序的相邻对出现逆序，则删除该列
- 否则保留该列，并更新严格有序的标记
