# [0206. 反转链表【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0206.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 递归](#2--s1---递归)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/reverse-linked-list)

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例 1：**

![](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-17-04-27.png)

- 输入：head = [1,2,3,4,5]
- 输出：[5,4,3,2,1]

**示例 2：**

![](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-17-04-34.png)

- 输入：head = [1,2]
- 输出：[2,1]

**示例 3：**

- 输入：head = []
- 输出：[]

**提示：**

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`

**进阶：**链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

:::

## 2. 🎯 s.1 - 递归

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head

  const newHead = reverseList(head.next)

  head.next.next = head
  head.next = null

  return newHead
}
```

::: details

- 实现思路：
  - 若链表为空，或者只有一个成员，那么直接将原链表返回；
  - 递
    - 找原链表的倒数第二个节点；
      - 借助倒数第二个节点找到尾节点，并将原链表的尾节点返回，作为新链表的表头节点；
      - 将尾节点的指针指向倒数第二个节点（尾节点的指针指向前一个节点），将倒数第二个节点的指针指向空；
  - 归
    - 接收到原链表的尾节点，赋值给 newHead，newHead 将作为最终返回的新链表的表头节点；
    - 将当前节点的下一个节点的指针指向自身，同时将当前节点指向空；（不断地重复，直到原链表的首节点）

:::
