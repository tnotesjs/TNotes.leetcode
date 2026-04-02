# [1419. 数青蛙【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1419.%20%E6%95%B0%E9%9D%92%E8%9B%99%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 计数模拟](#2--s1---计数模拟)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-frogs-croaking/)

给你一个字符串 `croakOfFrogs`，它表示不同青蛙发出的蛙鸣声（字符串 `"croak"` ）的组合。由于同一时间可以有多只青蛙呱呱作响，所以 `croakOfFrogs` 中会混合多个 `“croak”` _。_

请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目。

要想发出蛙鸣 "croak"，青蛙必须 依序 输出 `‘c’, ’r’, ’o’, ’a’, ’k’` 这 5 个字母。如果没有输出全部五个字母，那么它就不会发出声音。如果字符串 `croakOfFrogs` 不是由若干有效的 "croak" 字符混合而成，请返回 `-1`。

---

示例 1：

```txt
输入：croakOfFrogs = "croakcroak"
输出：1
解释：一只青蛙 “呱呱” 两次
```

示例 2：

```txt
输入：croakOfFrogs = "crcoakroak"
输出：2
解释：最少需要两只青蛙，“呱呱” 声用黑体标注
第一只青蛙 "crcoakroak"
第二只青蛙 "crcoakroak"
```

示例 3：

```txt
输入：croakOfFrogs = "croakcrook"
输出：-1
解释：给出的字符串不是 "croak" 的有效组合。
```

---

提示：

- `1 <= croakOfFrogs.length <= 10^5`
- 字符串中的字符只有 `'c'`, `'r'`, `'o'`, `'a'` 或者 `'k'`

## 2. 🎯 s.1 - 计数模拟

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是字符串长度
- 空间复杂度：$O(1)$，只用了 5 个计数器

算法思路：

- 维护 c/r/o/a/k 五个字符的计数器
- 遇到 'c' 时计数加 1，其它字符需确保前一个字符计数更大
- 同时活跃的青蛙数 = cnt[c] - cnt[k]，取最大值即答案
