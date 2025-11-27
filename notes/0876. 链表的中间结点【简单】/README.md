# [0876. 链表的中间结点【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0876.%20%E9%93%BE%E8%A1%A8%E7%9A%84%E4%B8%AD%E9%97%B4%E7%BB%93%E7%82%B9%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法 - 先找长度，再找中间](#2--s1---暴力解法---先找长度再找中间)
- [3. 🎯 s.2 - 快慢指针 - 一步两步](#3--s2---快慢指针---一步两步)
- [4. 🔗 引用](#4--references)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/middle-of-the-linked-list)

给你单链表的头结点 `head` ，请你找出并返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

**示例 1：**

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-03-15-25-26.png)

```
输出：[3,4,5]
解释：链表只有一个中间结点，值为 3 。
```

**示例 2：**

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-03-15-25-32.png)

```
输入：head = [1,2,3,4,5,6]
输出：[4,5,6]
解释：该链表有两个中间结点，值分别为 3 和 4 ，返回第二个结点。
```

**提示：**

- 链表的结点数范围是 `[1, 100]`
- `1 <= Node.val <= 100`

## 2. 🎯 s.1 - 暴力解法 - 先找长度，再找中间

```js
var middleNode = function(head) {
  // 获取到链表的总长度
  let len = 1,
  root = head
  while (head.next) {
    len ++
    head = head.next
  }
  // 找中点
  for (let i = 0 i < Math.floor(len / 2) i++) {
    root = root.next
  }
  return root
}
```

## 3. 🎯 s.2 - 快慢指针 - 一步两步

```js
var middleNode = function (head) {
  let slow = (fast = head)
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
```

- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-16-19-59-26.png)
- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-11-16-19-59-32.png)

## 4. 🔗 引用

- https://leetcode.cn/problems/middle-of-the-linked-list/solutions/165152/kuai-man-zhi-zhen-zhu-yao-zai-yu-diao-shi-by-liwei/
  - 本节笔记中用到的图片来源于这篇题解。
