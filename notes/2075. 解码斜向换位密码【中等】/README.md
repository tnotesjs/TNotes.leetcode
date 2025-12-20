# [2075. 解码斜向换位密码【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2075.%20%E8%A7%A3%E7%A0%81%E6%96%9C%E5%90%91%E6%8D%A2%E4%BD%8D%E5%AF%86%E7%A0%81%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/decode-the-slanted-ciphertext/)

字符串 `originalText` 使用 斜向换位密码 ，经由 行数固定 为 `rows` 的矩阵辅助，加密得到一个字符串 `encodedText` 。

`originalText` 先按从左上到右下的方式放置到矩阵中。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-10-13.png)

先填充蓝色单元格，接着是红色单元格，然后是黄色单元格，以此类推，直到到达 `originalText` 末尾。箭头指示顺序即为单元格填充顺序。所有空单元格用 `' '` 进行填充。矩阵的列数需满足：用 `originalText` 填充之后，最右侧列 不为空 。

接着按行将字符附加到矩阵中，构造 `encodedText` 。

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-10-20.png)

先把蓝色单元格中的字符附加到 `encodedText` 中，接着是红色单元格，最后是黄色单元格。箭头指示单元格访问顺序。

例如，如果 `originalText = "cipher"` 且 `rows = 3` ，那么我们可以按下述方法将其编码：

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-10-29.png)

蓝色箭头标识 `originalText` 是如何放入矩阵中的，红色箭头标识形成 `encodedText` 的顺序。在上述例子中，`encodedText = "ch ie pr"` 。

给你编码后的字符串 `encodedText` 和矩阵的行数 `rows` ，返回源字符串 `originalText` 。

---

注意： `originalText` 不 含任何尾随空格 `' '` 。生成的测试用例满足 仅存在一个 可能的 `originalText` 。

---

- 示例 1：

```txt
输入：encodedText = "ch   ie   pr", rows = 3
输出："cipher"
解释：此示例与问题描述中的例子相同。
```

- 示例 2：

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-10-48.png)

```txt
输入：encodedText = "iveo    eed   l te   olc", rows = 4
输出："i love leetcode"
解释：上图标识用于编码 originalText 的矩阵。
蓝色箭头展示如何从 encodedText 找到 originalText 。
```

- 示例 3：

![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-10-58.png)

```txt
输入：encodedText = "coding", rows = 1
输出："coding"
解释：由于只有 1 行，所以 originalText 和 encodedText 是相同的。
```

- 示例 4：

![图 5](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-11-03.png)

```txt
输入：encodedText = " b  ac", rows = 2
输出：" abc"
解释：originalText 不能含尾随空格，但它可能会有一个或者多个前置空格。
```

---

提示：

- `0 <= encodedText.length <= 10^6`
- `encodedText` 仅由小写英文字母和 `' '` 组成
- `encodedText` 是对某个 不含 尾随空格的 `originalText` 的一个有效编码
- `1 <= rows <= 1000`
- 生成的测试用例满足 仅存在一个 可能的 `originalText`

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
