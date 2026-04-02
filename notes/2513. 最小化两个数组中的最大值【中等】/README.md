# [2513. 最小化两个数组中的最大值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2513.%20%E6%9C%80%E5%B0%8F%E5%8C%96%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找 + 容斥原理](#2--s1---二分查找--容斥原理)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimize-the-maximum-of-two-arrays/)

给你两个数组 `arr1` 和 `arr2`，它们一开始都是空的。你需要往它们中添加正整数，使它们满足以下条件：

- `arr1` 包含 `uniqueCnt1` 个 互不相同 的正整数，每个整数都 不能 被 `divisor1` 整除。
- `arr2` 包含 `uniqueCnt2` 个 互不相同 的正整数，每个整数都 不能 被 `divisor2` 整除。
- `arr1` 和 `arr2` 中的元素 互不相同。

给你 `divisor1`，`divisor2`，`uniqueCnt1` 和 `uniqueCnt2`，请你返回两个数组中 最大元素 的 最小值。

---

示例 1：

```txt
输入：divisor1 = 2, divisor2 = 7, uniqueCnt1 = 1, uniqueCnt2 = 3
输出：4
解释：
我们可以把前 4 个自然数划分到 arr1 和 arr2 中。
arr1 = [1] 和 arr2 = [2,3,4]。
可以看出两个数组都满足条件。
最大值是 4，所以返回 4。
```

示例 2：

```txt
输入：divisor1 = 3, divisor2 = 5, uniqueCnt1 = 2, uniqueCnt2 = 1
输出：3
解释：
arr1 = [1,2] 和 arr2 = [3] 满足所有条件。
最大值是 3，所以返回 3。
```

示例 3：

```txt
输入：divisor1 = 2, divisor2 = 4, uniqueCnt1 = 8, uniqueCnt2 = 2
输出：15
解释：
最终数组为 arr1 = [1,3,5,7,9,11,13,15] 和 arr2 = [2,6]。
上述方案是满足所有条件的最优解。
```

---

提示：

- `2 <= divisor1, divisor2 <= 10^5`
- `1 <= uniqueCnt1, uniqueCnt2 < 10^9`
- `2 <= uniqueCnt1 + uniqueCnt2 <= 10^9`

## 2. 🎯 s.1 - 二分查找 + 容斥原理

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log V)$，其中 $V$ 是答案的上界
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 二分答案 $mid$，检查 $[1, mid]$ 范围内是否有足够的数
- 用容斥原理计算：不被 $d_1$ 整除的数、不被 $d_2$ 整除的数、两者都不被整除的数
- 验证三个条件：arr1 有足够的可选数、arr2 有足够的可选数、总共有足够的不重复数
