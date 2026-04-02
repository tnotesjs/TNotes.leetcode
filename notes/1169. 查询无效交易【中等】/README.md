# [1169. 查询无效交易【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1169.%20%E6%9F%A5%E8%AF%A2%E6%97%A0%E6%95%88%E4%BA%A4%E6%98%93%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 模拟](#2--s1---模拟)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/invalid-transactions/)

如果出现下述两种情况，交易 可能无效：

- 交易金额超过 `$1000`
- 或者，它和 另一个城市 中 同名 的另一笔交易相隔不超过 `60` 分钟（包含 60 分钟整）

给定字符串数组交易清单 `transaction`。每个交易字符串 `transactions[i]` 由一些用逗号分隔的值组成，这些值分别表示交易的名称，时间（以分钟计），金额以及城市。

返回 `transactions`，返回可能无效的交易列表。你可以按 任何顺序 返回答案。

---

示例 1：

```txt
输入：transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
输出：["alice,20,800,mtv","alice,50,100,beijing"]

解释：
第一笔交易是无效的，因为第二笔交易和它间隔不超过 60 分钟、名称相同且发生在不同的城市。
同样，第二笔交易也是无效的。
```

示例 2：

```txt
输入：transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
输出：["alice,50,1200,mtv"]
```

示例 3：

```txt
输入：transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
输出：["bob,50,1200,mtv"]
```

---

提示：

- `transactions.length <= 1000`
- 每笔交易 `transactions[i]` 按 `"{name},{time},{amount},{city}"` 的格式进行记录
- 每个交易名称 `{name}` 和城市 `{city}` 都由小写英文字母组成，长度在 `1` 到 `10` 之间
- 每个交易时间 `{time}` 由一些数字组成，表示一个 `0` 到 `1000` 之间的整数
- 每笔交易金额 `{amount}` 由一些数字组成，表示一个 `0` 到 `2000` 之间的整数

## 2. 🎯 s.1 - 模拟

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，其中 $n$ 是交易数量
- 空间复杂度：$O(n)$，存储解析后的交易信息

算法思路：

- 解析每笔交易的名称、时间、金额和城市
- 对每笔交易检查两个条件：金额超过 1000，或与同名不同城市的另一笔交易时间间隔不超过 60 分钟
- 将所有满足条件的交易加入结果集合
