# [1436. 旅行终点站【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1436.%20%E6%97%85%E8%A1%8C%E7%BB%88%E7%82%B9%E7%AB%99%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/destination-city/)

给你一份旅游线路图，该线路图中的旅行线路用数组 `paths` 表示，其中 `paths[i] = [cityAi, cityBi]` 表示该线路将会从 `cityAi` 直接前往 `cityBi` 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市*。*

题目数据保证线路图会形成一条不存在循环的线路，因此恰有一个旅行终点站。

---

- **示例 1：**

```txt
输入：paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
输出："Sao Paulo"

解释：
从 "London" 出发，最后抵达终点站 "Sao Paulo" 。
本次旅行的路线是 "London" -> "New York" -> "Lima" -> "Sao Paulo" 。
```

- **示例 2：**

```txt
输入：paths = [["B","C"],["D","B"],["C","A"]]
输出："A"

解释：所有可能的线路是：
"D" -> "B" -> "C" -> "A".
"B" -> "C" -> "A".
"C" -> "A".
"A".
显然，旅行终点站是 "A" 。
```

- **示例 3：**

```txt
输入：paths = [["A","Z"]]
输出："Z"
```

---

**提示：**

- `1 <= paths.length <= 100`
- `paths[i].length == 2`
- `1 <= cityAi.length, cityBi.length <= 10`
- `cityAi != cityBi`
- 所有字符串均由大小写英文字母和空格字符组成。

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
