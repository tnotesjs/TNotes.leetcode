# [2007. 从双倍数组中还原原数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2007.%20%E4%BB%8E%E5%8F%8C%E5%80%8D%E6%95%B0%E7%BB%84%E4%B8%AD%E8%BF%98%E5%8E%9F%E5%8E%9F%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-original-array-from-doubled-array/)

一个整数数组 `original` 可以转变成一个 双倍 数组 `changed` ，转变方式为将 `original` 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。

给你一个数组 `changed` ，如果 `change` 是 双倍 数组，那么请你返回 `original`数组，否则请返回空数组。`original` 的元素可以以 任意 顺序返回。

---

- 示例 1：

```txt
输入：changed = [1,3,4,2,6,8]
输出：[1,3,4]
解释：一个可能的 original 数组为 [1,3,4] :
- 将 1 乘以 2 ，得到 1 * 2 = 2 。
- 将 3 乘以 2 ，得到 3 * 2 = 6 。
- 将 4 乘以 2 ，得到 4 * 2 = 8 。
其他可能的原数组方案为 [4,3,1] 或者 [3,1,4] 。
```

- 示例 2：

```txt
输入：changed = [6,3,0,1]
输出：[]
解释：changed 不是一个双倍数组。
```

- 示例 3：

```txt
输入：changed = [1]
输出：[]
解释：changed 不是一个双倍数组。
```

---

提示：

- `1 <= changed.length <= 10^5`
- `0 <= changed[i] <= 10^5`

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
