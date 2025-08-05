# [2299. 强密码检验器 II【简单】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/2299.%20%E5%BC%BA%E5%AF%86%E7%A0%81%E6%A3%80%E9%AA%8C%E5%99%A8%20II%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 Solutions.1 - 暴力解法](#2--solutions1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/strong-password-checker-ii/)

如果一个密码满足以下所有条件，我们称它是一个 **强**  密码：

- 它有至少 `8`  个字符。
- 至少包含 **一个小写英文**  字母。
- 至少包含 **一个大写英文**  字母。
- 至少包含 **一个数字** 。
- 至少包含 **一个特殊字符** 。特殊字符为：`"!@#$%^&*()-+"`  中的一个。
- 它 **不**  包含  `2`  个连续相同的字符（比方说  `"aab"`  不符合该条件，但是  `"aba"`  符合该条件）。

给你一个字符串  `password` ，如果它是一个  **强**  密码，返回  `true`，否则返回  `false` 。

---

- **示例 1：**

```txt
输入：password = "IloveLe3tcode!"
输出：true
解释：密码满足所有的要求，所以我们返回 true 。
```

- **示例 2：**

```txt
输入：password = "Me+You--IsMyDream"
输出：false
解释：密码不包含数字，且包含 2 个连续相同的字符。所以我们返回 false 。
```

- **示例 3：**

```txt
输入：password = "1aB!"
输出：false
解释：密码不符合长度要求。所以我们返回 false 。
```

---

**提示：**

- `1 <= password.length <= 100`
- `password`  包含字母，数字和  `"!@#$%^&*()-+"`  这些特殊字符。

:::

## 2. 🎯 Solutions.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
