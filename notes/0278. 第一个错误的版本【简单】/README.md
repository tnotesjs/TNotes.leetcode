# [0278. 第一个错误的版本【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0278.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%94%99%E8%AF%AF%E7%9A%84%E7%89%88%E6%9C%AC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🎯 s.2 - 二分查找](#3--s2---二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/first-bad-version/)

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 `n` 个版本 `[1, 2, ..., n]`，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 `bool isBadVersion(version)` 接口来判断版本号 `version` 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

---

示例 1：

```txt
输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。
```

---

示例 2：

```txt
输入：n = 1, bad = 1
输出：1
```

---

提示：

- `1 <= bad <= n <= 2^31 - 1`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js

:::

- 时间复杂度：$O(n)$，最坏情况需要遍历所有版本
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：直接将所有成员都遍历一遍来查找，从最小的开始。

::: warning ⚠️ 注意

这种解法在早期（21、22 年那会儿）是可以通过的，不过现在（2024 年 11 月 16 日 23:08:01）测试了一下，发现会超时。

leetcode 提交记录如下：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-16-23-09-11.png)

:::

## 3. 🎯 s.2 - 二分查找

::: code-group

<<< ./solutions/2/1.js

:::

- 时间复杂度：$O(\log n)$，二分查找
- 空间复杂度：$O(1)$，只使用常数空间

算法思路：

- 使用二分查找定位第一个错误版本
- 如果 `mid` 是错误版本，说明第一个错误版本在 `[left, mid]` 区间
- 如果 `mid` 是正确版本，说明第一个错误版本在 `[mid+1, right]` 区间
- 当 `left == right` 时，找到第一个错误版本
- 使用 `left + (right - left) / 2` 避免整数溢出
