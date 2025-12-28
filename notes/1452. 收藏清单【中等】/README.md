# [1452. 收藏清单【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1452.%20%E6%94%B6%E8%97%8F%E6%B8%85%E5%8D%95%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/)

给你一个数组 `favoriteCompanies` ，其中 `favoriteCompanies[i]` 是第 `i` 名用户收藏的公司清单（下标从 0 开始）。

请找出不是其他任何人收藏的公司清单的子集的收藏清单，并返回该清单下标*。*下标需要按升序排列*。*

---

- 示例 1：

```txt
输入：favoriteCompanies = [
  ["leetcode", "google", "facebook"],
  ["google", "microsoft"],
  ["google", "facebook"],
  ["google"],
  ["amazon"]
]

输出：[0,1,4]

解释：
favoriteCompanies[2]=["google","facebook"] 是 favoriteCompanies[0]=["leetcode","google","facebook"] 的子集。
favoriteCompanies[3]=["google"] 是 favoriteCompanies[0]=["leetcode","google","facebook"] 和 favoriteCompanies[1]=["google","microsoft"] 的子集。
其余的收藏清单均不是其他任何人收藏的公司清单的子集，因此，答案为 [0,1,4]。
```

- 示例 2：

```txt
输入：favoriteCompanies = [
  ["leetcode", "google", "facebook"],
  ["leetcode", "amazon"],
  ["facebook", "google"]
]

输出：[0,1]

解释：
favoriteCompanies[2]=["facebook","google"] 是 favoriteCompanies[0]=["leetcode","google","facebook"] 的子集，因此，答案为 [0,1]。
```

- 示例 3：

```txt
输入：favoriteCompanies = [["leetcode"], ["google"], ["facebook"], ["amazon"]]
输出：[0,1,2,3]
```

---

提示：

- `1 <= favoriteCompanies.length <= 100`
- `1 <= favoriteCompanies[i].length <= 500`
- `1 <= favoriteCompanies[i][j].length <= 20`
- `favoriteCompanies[i]` 中的所有字符串 各不相同。
- 用户收藏的公司清单也 各不相同 ，也就是说，即便我们按字母顺序排序每个清单， `favoriteCompanies[i] != favoriteCompanies[j]` 仍然成立。
- 所有字符串仅包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
