# [0622. 设计循环队列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0622.%20%E8%AE%BE%E8%AE%A1%E5%BE%AA%E7%8E%AF%E9%98%9F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

::: details 📚 相关资源

- [📂 TNotes.yuque（笔记附件资源）](https://www.yuque.com/tdahuyou/tnotes.yuque/)
  - [TNotes.yuque.leetcode.0622](https://www.yuque.com/tdahuyou/tnotes.yuque/leetcode.0622)

:::

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 设计循环队列](#2--s1---设计循环队列)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/design-circular-queue)

设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：

- `MyCircularQueue(k)`: 构造器，设置队列长度为 k。
- `Front`: 从队首获取元素。如果队列为空，返回 -1。
- `Rear`: 获取队尾元素。如果队列为空，返回 -1。
- `enQueue(value)`: 向循环队列插入一个元素。如果成功插入则返回真。
- `deQueue()`: 从循环队列中删除一个元素。如果成功删除则返回真。
- `isEmpty()`: 检查循环队列是否为空。
- `isFull()`: 检查循环队列是否已满。

示例：

```java
MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
circularQueue.enQueue(1);  // 返回 true
circularQueue.enQueue(2);  // 返回 true
circularQueue.enQueue(3);  // 返回 true
circularQueue.enQueue(4);  // 返回 false，队列已满
circularQueue.Rear();  // 返回 3
circularQueue.isFull();  // 返回 true
circularQueue.deQueue();  // 返回 true
circularQueue.enQueue(4);  // 返回 true
circularQueue.Rear();  // 返回 4
```

提示：

- 所有的值都在 0 至 1000 的范围内；
- 操作数将在 1 至 1000 的范围内；
- 请不要使用内置的队列库。

## 2. 🎯 s.1 - 设计循环队列

![img](assets/622.%20设计循环队列-题解.gif)

```javascript
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k)
  this.count = 0 // 当前共有多少个成员
  this.capacity = k // 容量上限
  this.head = 0
  this.tail = 0
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false

  this.tail = (this.head + this.count) % this.capacity
  this.queue[this.tail] = value
  this.count++
  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false

  this.head = (this.head + 1) % this.capacity
  this.count--
  return true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.head]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[this.tail]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count === this.capacity
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
```

deQueue 删除行为

- 遵循 FIFO 原则，最先进入的最先出去。
- 并非将元素给删掉，那个位置的值依旧是存在的，仅仅是没有指针再指向它了。

isFull 判断逻辑

在第二次执行 `circularQueue.enQueue(4)` 的时候可以往循环队列中插入新成员，此时维护的数组内部每个位置其实都已经是有值的状态了。由此可见在判断循环队列是否已经满了的逻辑，并非看数组的每个位置是否都有值了。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-25-17-16-45.png)

其中一种正确的做法是在内部维护一个变量 count，在每次 enQueue 成功的时候 count++，在每次 deQueue 成功的时候 count--，如果 count 的值和初始化时传入的 k 相同，那么意味着满了，否则没满。
