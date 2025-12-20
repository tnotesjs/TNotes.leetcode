# [2775. 将 undefined 转为 null【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2775.%20%E5%B0%86%20undefined%20%E8%BD%AC%E4%B8%BA%20null%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归](#2--s1---递归)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/undefined-to-null/)

给定一个深层嵌套的对象或数组 obj ，并创建该对象 obj 的副本，将其中的任何 undefined 值替换为 null 。

当使用 JSON.stringify() 将对象转换为 JSON 字符串时，undefined 值与 null 值的处理方式不同。该函数有助于确保序列化数据不会出现意外错误。

示例 1：

- 输入：`obj = {"a": undefined, "b": 3}`
- 输出：`{"a": null, "b": 3}`
- 解释：obj.a 的值已从 undefined 更改为 null 。

示例 2：

- 输入：`obj = {"a": undefined, "b": ["a", undefined]}`
- 输出：`{"a": null,"b": ["a", null]}`
- 解释：obj.a 和 obj.b[1] 的值已从 undefined 更改为 null 。

提示：

- `obj` 是一个有效的 JSON 对象或数组
- `2 <= JSON.stringify(obj).length <= 105`

## 2. 🎯 s.1 - 递归

```js
function undefinedToNull(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      obj[key] = undefinedToNull(obj[key])
    }
    if (obj[key] === undefined) {
      obj[key] = null
    }
  }
  return obj
}
```
