# [2637. 有时间限制的 Promise 对象【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2637.%20%E6%9C%89%E6%97%B6%E9%97%B4%E9%99%90%E5%88%B6%E7%9A%84%20Promise%20%E5%AF%B9%E8%B1%A1%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/promise-time-limit/)

请你编写一个函数，它接受一个异步函数 `fn` 和一个以毫秒为单位的时间 `t`。它应根据限时函数返回一个有 **限时** 效果的函数。函数 `fn` 接受提供给 **限时** 函数的参数。

**限时** 函数应遵循以下规则：

- 如果 `fn` 在 `t` 毫秒的时间限制内完成，**限时** 函数应返回结果。
- 如果 `fn` 的执行超过时间限制，**限时** 函数应拒绝并返回字符串 `"Time Limit Exceeded"` 。

---

- **示例 1：**

```txt
输入：
fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}
inputs = [5]
t = 50
输出：{"rejected":"Time Limit Exceeded","time":50}
解释：
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // 输出结果

提供的函数设置在 100ms 后执行完成，但是设置的超时时间为 50ms，所以在 t=50ms 时拒绝因为达到了超时时间。
```

- **示例 2：**

```txt
输入：
fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}
inputs = [5]
t = 150
输出：{"resolved":25,"time":100}
解释：
在 t=100ms 时执行 5*5=25 ，没有达到超时时间。
```

- **示例 3：**

```txt
输入：
fn = async (a, b) => {
  await new Promise(res => setTimeout(res, 120));
  return a + b;
}
inputs = [5,10]
t = 150
输出：{"resolved":15,"time":120}
解释：
在 t=120ms 时执行 5+10=15，没有达到超时时间。
```

- **示例 4：**

```txt
输入：
fn = async () => {
  throw "Error";
}
inputs = []
t = 1000
输出：{"rejected":"Error","time":0}
解释：
此函数始终丢出 Error
```

---

**提示：**

- `0 <= inputs.length <= 10`
- `0 <= t <= 1000`
- `fn` 返回一个 Promise 对象

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
