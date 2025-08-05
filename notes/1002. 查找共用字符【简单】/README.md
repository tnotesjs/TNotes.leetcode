# [1002. 查找共用字符【简单】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/1002.%20%E6%9F%A5%E6%89%BE%E5%85%B1%E7%94%A8%E5%AD%97%E7%AC%A6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 Solutions.1 - 暴力解法](#2--solutions1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/find-common-characters/)

给你一个字符串数组 `words` ，请你找出所有在 `words` 的每个字符串中都出现的共用字符（**包括重复字符**），并以数组形式返回。你可以按 **任意顺序** 返回答案。

---

- **示例 1：**

```txt
输入：words = ["bella","label","roller"]
输出：["e","l","l"]
```

- **示例 2：**

```txt
输入：words = ["cool","lock","cook"]
输出：["c","o"]
```

---

**提示：**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` 由小写英文字母组成

:::

## 2. 🎯 Solutions.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
