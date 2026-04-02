# [1115. 交替打印 FooBar【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1115.%20%E4%BA%A4%E6%9B%BF%E6%89%93%E5%8D%B0%20FooBar%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 信号量](#2--s1---信号量)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/print-foobar-alternately/)

给你一个类：

```txt
class FooBar {
  public void foo() {
    for (int i = 0; i < n; i++) {
      print("foo");
    }
  }

  public void bar() {
    for (int i = 0; i < n; i++) {
      print("bar");
    }
  }
}
```

两个不同的线程将会共用一个 `FooBar` 实例：

- 线程 A 将会调用 `foo()` 方法，而
- 线程 B 将会调用 `bar()` 方法

请设计修改程序，以确保 `"foobar"` 被输出 `n` 次。

---

示例 1：

```txt
输入：n = 1
输出："foobar"
解释：这里有两个线程被异步启动。其中一个调用 foo() 方法, 另一个调用 bar() 方法，"foobar" 将被输出一次。
```

示例 2：

```txt
输入：n = 2
输出："foobarfoobar"
解释："foobar" 将被输出两次。
```

---

提示：

- `1 <= n <= 1000`

## 2. 🎯 s.1 - 信号量

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，循环 n 次
- 空间复杂度：$O(1)$，只使用常数级别的同步原语

算法思路：

- 使用两个信号量控制 foo 和 bar 的交替执行
- foo 执行后释放 bar 的信号量，bar 执行后释放 foo 的信号量
- 初始时 foo 的信号量为 1，bar 的为 0，保证 foo 先执行
