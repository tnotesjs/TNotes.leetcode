# [0006. Z 字形变换【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0006.%20Z%20%E5%AD%97%E5%BD%A2%E5%8F%98%E6%8D%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 Solutions.1 - 利用二维矩阵模拟](#2--solutions1---利用二维矩阵模拟)
- [3. 🎯 Solutions.2 - 压缩矩阵空间](#3--solutions2---压缩矩阵空间)
- [4. 🎯 Solutions.3 - 直接构造](#4--solutions3---直接构造)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/zigzag-conversion/)

将一个给定字符串 `s` 根据给定的行数 `numRows` ，以从上往下、从左到右进行  Z 字形排列。

比如输入字符串为 `"PAYPALISHIRING"`  行数为 `3` 时，排列如下：

P A H N A P L S I I G Y I R

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"PAHNAPLSIIGYIR"`。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);

---

- **示例 1：**

```
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"**示例 2：**输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

- **示例 3：**

```
输入：s = "A", numRows = 1
输出："A"
```

---

**提示：**

- `1 <= s.length <= 1000`
- `s` 由英文字母（小写和大写）、`','` 和 `'.'` 组成
- `1 <= numRows <= 1000`

:::

## 2. 🎯 Solutions.1 - 利用二维矩阵模拟

::: code-group

<<< ./solutions/1/1.js [js]

:::

## 3. 🎯 Solutions.2 - 压缩矩阵空间

::: code-group

<<< ./solutions/2/1.js [js]

:::

## 4. 🎯 Solutions.3 - 直接构造

::: code-group

<<< ./solutions/3/1.js [js]

:::
