# [1018. 可被 5 整除的二进制前缀【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1018.%20%E5%8F%AF%E8%A2%AB%205%20%E6%95%B4%E9%99%A4%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%89%8D%E7%BC%80%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-prefix-divisible-by-5/)

给定一个二进制数组 `nums` ( **索引从 0 开始** )。

我们将`xi`  定义为其二进制表示形式为子数组  `nums[0..i]` (从最高有效位到最低有效位)。

- 例如，如果 `nums =[1,0,1]` ，那么  `x0 = 1`, `x1 = 2`, 和  `x2 = 5`。

返回布尔值列表  `answer`，只有当  `xi`  可以被 `5`  整除时，答案  `answer[i]` 为  `true`，否则为 `false`。

---

- **示例 1：**

```txt
输入：nums = [0,1,1]
输出：[true,false,false]
解释：
输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为 true 。
```

- **示例 2：**

```txt
输入：nums = [1,1,1]
输出：[false,false,false]
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `nums[i]`  仅为  `0`  或  `1`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
