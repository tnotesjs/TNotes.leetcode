# [0208. 实现 Trie (前缀树)【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0208.%20%E5%AE%9E%E7%8E%B0%20Trie%20(%E5%89%8D%E7%BC%80%E6%A0%91)%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 字典树](#2-s1---字典树)
- [3. 【AI】结合示例具体走一遍流程](#3-ai结合示例具体走一遍流程)
  - [3.1. 初始](#31-初始)
  - [3.2. `insert("apple")`](#32-insertapple)
  - [3.3. `search("apple")`](#33-searchapple)
  - [3.4. `search("app")`](#34-searchapp)
  - [3.5. `startsWith("app")`](#35-startswithapp)
  - [3.6. `insert("app")`](#36-insertapp)
  - [3.7. `search("app")`](#37-searchapp)
  - [3.8. 对照代码](#38-对照代码)
- [4. 引用](#4-引用)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/implement-trie-prefix-tree/)

[Trie][1]（发音类似 "try"）或者说前缀树是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。

请你实现 Trie 类：

- `Trie()` 初始化前缀树对象。
- `void insert(String word)` 向前缀树中插入字符串 `word`。
- `boolean search(String word)` 如果字符串 `word` 在前缀树中，返回 `true`（即，在检索之前已经插入）；否则，返回 `false`。
- `boolean startsWith(String prefix)` 如果之前已经插入的字符串 `word` 的前缀之一为 `prefix`，返回 `true`；否则，返回 `false`。

---

示例：

```txt
输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
```

---

提示：

- `1 <= word.length, prefix.length <= 2000`
- `word` 和 `prefix` 仅由小写英文字母组成
- `insert`、`search` 和 `startsWith` 调用次数总计不超过 `3 * 10^4` 次

---

相关标签：

- `设计`
- `字典树`
- `哈希表`
- `字符串`

---

相似题目：

- `0211. 添加与搜索单词 - 数据结构设计【中等】`
- `0642. 设计搜索自动补全系统【困难】`（会员题）
- `0648. 单词替换【中等】`
- `0676. 实现一个魔法字典【中等】`
- `2227. 加密解密字符串【困难】`
- `1804. 实现 Trie （前缀树） II【中等】`（会员题）
- `3045. 统计前后缀下标对 II【困难】`
- `3042. 统计前后缀下标对 I【简单】`

## 2. s.1 - 字典树

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：`insert`/`search`/`startsWith` 均为 $O(m)$，其中 $m$ 是单词或前缀的长度
- 空间复杂度：$O(T)$，其中 $T$ 是所有插入单词的字符总数

算法思路：

- 每个节点包含子节点映射和是否为单词结尾的标记
- `insert`：逐字符遍历，不存在则创建新节点，最后标记结尾
- `search` 和 `startsWith` 复用前缀搜索逻辑，区别在于是否检查 `isEnd`

## 3. 【AI】结合示例具体走一遍流程

用题目示例完整走一遍。

```txt
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");    // true
trie.search("app");      // false
trie.startsWith("app");  // true
trie.insert("app");
trie.search("app");      // true
```

### 3.1. 初始

```text
root { children: {}, isEnd: false }
```

### 3.2. `insert("apple")`

从 root 出发，逐字符建节点，最后打上 `isEnd`。

| 步  | 字符 | 动作                           |
| --- | ---- | ------------------------------ |
| 1   | `a`  | root 下没有 `a` → 新建；走到 a |
| 2   | `p`  | a 下没有 `p` → 新建；走到 p    |
| 3   | `p`  | 再建一层 p                     |
| 4   | `l`  | 新建 l                         |
| 5   | `e`  | 新建 e，设 `e.isEnd = true`    |

```text
root
 └─ a
     └─ p
         └─ p
             └─ l
                 └─ e ●   ← apple 结束
```

### 3.3. `search("apple")`

走 `_searchPrefix("apple")`：`a→p→p→l→e` 全程通，落到 `e`。

`e.isEnd === true` → **true**。

### 3.4. `search("app")`

走 `_searchPrefix("app")`：`a→p→p` 通，落到第二个 `p`。

但这个 `p` 的 `isEnd` 仍是 `false`（只插过 apple，没插过 app）→ **false**。

```text
... → p → p ← 停在这里，不是单词结尾
         └─ l → e ●
```

### 3.5. `startsWith("app")`

同样走 `_searchPrefix("app")`，节点存在即可，**不看** `isEnd` → **true**。

### 3.6. `insert("app")`

再走一遍 `a→p→p`，路径已存在，不用新建；到第二个 `p` 时设 `isEnd = true`。

```text
root
 └─ a
     └─ p
         └─ p ●       ← app 结束（刚标记）
             └─ l
                 └─ e ●  ← apple 结束
```

### 3.7. `search("app")`

又走到第二个 `p`，这次 `isEnd === true` → **true**。

### 3.8. 对照代码

| 操作         | 关键逻辑                                 |
| ------------ | ---------------------------------------- |
| `insert`     | 缺边就 `new Trie()`，走完 `isEnd = true` |
| `search`     | 前缀存在 **且** `node.isEnd`             |
| `startsWith` | 前缀存在即可（`node !== null`）          |

公共前缀 `app` 只存一条链；`apple` 在后面多挂 `l→e`，这就是 Trie 省空间、查前缀快的原因。

## 4. 引用

- [Trie - 百度百科][1]

[1]: https://baike.baidu.com/item/字典树/9825209?fr=aladdin
