# [2976. 转换字符串的最小成本 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2976.%20%E8%BD%AC%E6%8D%A2%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%B0%8F%E6%88%90%E6%9C%AC%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-cost-to-convert-string-i/)

给你两个下标从 0 开始的字符串 `source` 和 `target` ，它们的长度均为 `n` 并且由 小写 英文字母组成。

另给你两个下标从 0 开始的字符数组 `original` 和 `changed` ，以及一个整数数组 `cost` ，其中 `cost[i]` 代表将字符 `original[i]` 更改为字符 `changed[i]` 的成本。

你从字符串 `source` 开始。在一次操作中，如果 存在 任意 下标 `j` 满足 `cost[j] == z` 、`original[j] == x` 以及 `changed[j] == y`。你就可以选择字符串中的一个字符 `x` 并以 `z` 的成本将其更改为字符 `y`。

返回将字符串 `source` 转换为字符串 `target` 所需的 最小 成本。如果不可能完成转换，则返回 `-1`。

注意，可能存在下标 `i` 、`j` 使得 `original[j] == original[i]` 且 `changed[j] == changed[i]`。

---

示例 1：

```txt
输入：source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
输出：28
解释：将字符串 "abcd" 转换为字符串 "acbe" ：
- 更改下标 1 处的值 'b' 为 'c' ，成本为 5。
- 更改下标 2 处的值 'c' 为 'e' ，成本为 1。
- 更改下标 2 处的值 'e' 为 'b' ，成本为 2。
- 更改下标 3 处的值 'd' 为 'e' ，成本为 20。
产生的总成本是 5 + 1 + 2 + 20 = 28。
可以证明这是可能的最小成本。
```

示例 2：

```txt
输入：source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]
输出：12
解释：要将字符 'a' 更改为 'b'：
- 将字符 'a' 更改为 'c'，成本为 1
- 将字符 'c' 更改为 'b'，成本为 2
产生的总成本是 1 + 2 = 3。
将所有 'a' 更改为 'b'，产生的总成本是 3 * 4 = 12。
```

示例 3：

```txt
输入：source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000]
输出：-1
解释：无法将 source 字符串转换为 target 字符串，因为下标 3 处的值无法从 'd' 更改为 'e'。
```

---

提示：

- `1 <= source.length == target.length <= 10^5`
- `source`、`target` 均由小写英文字母组成
- `1 <= cost.length== original.length == changed.length <= 2000`
- `original[i]`、`changed[i]` 是小写英文字母
- `1 <= cost[i] <= 10^6`
- `original[i] != changed[i]`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
