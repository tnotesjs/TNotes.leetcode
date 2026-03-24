# [0341. 扁平化嵌套列表迭代器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0341.%20%E6%89%81%E5%B9%B3%E5%8C%96%E5%B5%8C%E5%A5%97%E5%88%97%E8%A1%A8%E8%BF%AD%E4%BB%A3%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/flatten-nested-list-iterator/)

给你一个嵌套的整数列表 `nestedList`。每个元素要么是一个整数，要么是一个列表；该列表的元素也可能是整数或者是其他列表。请你实现一个迭代器将其扁平化，使之能够遍历这个列表中的所有整数。

实现扁平迭代器类 `NestedIterator` ：

- `NestedIterator(List<NestedInteger> nestedList)` 用嵌套列表 `nestedList` 初始化迭代器。
- `int next()` 返回嵌套列表的下一个整数。
- `boolean hasNext()` 如果仍然存在待迭代的整数，返回 `true` ；否则，返回 `false`。

你的代码将会用下述伪代码检测：

```python
initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res
```

如果 `res` 与预期的扁平化列表匹配，那么你的代码将会被判为正确。

---

示例 1：

```txt
输入：nestedList = [[1,1],2,[1,1]]
输出：[1,1,2,1,1]
解释：通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
```

示例 2：

```txt
输入：nestedList = [1,[4,[6]]]
输出：[1,4,6]
解释：通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。
```

---

提示：

- `1 <= nestedList.length <= 500`
- 嵌套列表中的整数值在范围 `[-10^6, 10^6]` 内

## 2. 🎯 s.1 - 递归展开

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：初始化 $O(n)$，`next`/`hasNext` 均为 $O(1)$，其中 $n$ 是所有整数个数
- 空间复杂度：$O(n)$

算法思路：

- 初始化时递归展开所有嵌套列表，将所有整数存入一个数组
- `next` 和 `hasNext` 直接操作数组索引
