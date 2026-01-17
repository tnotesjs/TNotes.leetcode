# [3411. 最长乘积等价子数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3411.%20%E6%9C%80%E9%95%BF%E4%B9%98%E7%A7%AF%E7%AD%89%E4%BB%B7%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力枚举](#2--s1---暴力枚举)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-subarray-with-equal-products/)

给你一个由 正整数 组成的数组 `nums`。

如果一个数组 `arr` 满足 `prod(arr) == lcm(arr) * gcd(arr)`，则称其为 乘积等价数组 ，其中：

- `prod(arr)` 表示 `arr` 中所有元素的乘积。
- `gcd(arr)` 表示 `arr` 中所有元素的最大公因数 (GCD)。
- `lcm(arr)` 表示 `arr` 中所有元素的最小公倍数 (LCM)。

返回数组 `nums` 的 最长 乘积等价 子数组 的长度。

> - GCD
>   - gcd 函数
>   - gcd(a, b) 表示 a 和 b 的 最大公约数。
> - LCM
>   - 最小公倍数
>   - 术语 lcm(a, b) 表示 a 和 b 的 最小公倍数。
> - 子数组 是数组中连续的 非空 元素序列。

---

示例 1：

输入： nums = [1,2,1,2,1,1,1]

输出： 5

解释：

最长的乘积等价子数组是 `[1, 2, 1, 1, 1]`，其中 `prod([1, 2, 1, 1, 1]) = 2`， `gcd([1, 2, 1, 1, 1]) = 1`，以及 `lcm([1, 2, 1, 1, 1]) = 2`。

---

示例 2：

输入： nums = [2,3,4,5,6]

输出： 3

解释：

最长的乘积等价子数组是 `[3, 4, 5]`。

---

示例 3：

输入： nums = [1,2,3,1,4,5,1]

输出： 5

---

提示：

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 10`

## 2. 🎯 s.1 - 暴力枚举

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n^2 \log M)$，其中 n 是数组长度，M 是元素最大值，gcd 和 lcm 计算需要 $O(\log M)$
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 由于数据规模较小（n ≤ 100），可以暴力枚举所有子数组
- 对于每个子数组，维护乘积 prod、最大公约数 gcd、最小公倍数 lcm
- 检查是否满足 `prod == lcm * gcd`，更新最长长度
