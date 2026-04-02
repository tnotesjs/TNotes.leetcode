# [2690. 无穷方法对象【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2690.%20%E6%97%A0%E7%A9%B7%E6%96%B9%E6%B3%95%E5%AF%B9%E8%B1%A1%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - Proxy](#2--s1---proxy)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/infinite-method-object)

请你编写一个函数，返回一个无穷方法对象。

无穷方法对象 被定义为一个对象，它允许您调用任何方法，并始终返回方法的名称。

例如，如果执行 `obj.abc123()`，它将返回 `"abc123"`。

---

示例 1：

- 输入：`method = "abc123"`
- 输出：`"abc123"`

解释：

- `const obj = createInfiniteObject();`
- `obj['abc123'](); // "abc123"`
- 返回的字符串应始终与方法名称匹配。

---

示例 2：

- 输入：`method = ".-qw73n|^2It"`
- 输出：`".-qw73n|^2It"`

解释：返回的字符串应始终与方法名称匹配。

---

提示：

- `0 <= method.length <= 1000`

## 2. 🎯 s.1 - Proxy

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$，每次方法调用为常数时间
- 空间复杂度：$O(1)$，只创建了一个 Proxy 对象

算法思路：

- 返回一个 Proxy 代理对象，拦截所有属性访问
- get 拦截器中返回一个函数，该函数返回属性名 prop
