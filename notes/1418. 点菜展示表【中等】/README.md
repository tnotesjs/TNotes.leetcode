# [1418. 点菜展示表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1418.%20%E7%82%B9%E8%8F%9C%E5%B1%95%E7%A4%BA%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/display-table-of-food-orders-in-a-restaurant/)

给你一个数组 `orders`，表示客户在餐厅中完成的订单，确切地说， `orders[i]=[customerNamei,tableNumberi,foodItemi]`，其中 `customerNamei` 是客户的姓名，`tableNumberi` 是客户所在餐桌的桌号，而 `foodItemi` 是客户点的餐品名称。

请你返回该餐厅的 点菜展示表。在这张表中，表中第一行为标题，其第一列为餐桌桌号 “Table”，后面每一列都是按字母顺序排列的餐品名称。接下来每一行中的项则表示每张餐桌订购的相应餐品数量，第一列应当填对应的桌号，后面依次填写下单的餐品数量。

注意：客户姓名不是点菜展示表的一部分。此外，表中的数据行应该按餐桌桌号升序排列。

---

示例 1：

```txt
输入：orders = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"]
]

输出：[
  ["Table", "Beef Burrito", "Ceviche", "Fried Chicken", "Water"],
  ["3", "0", "2", "1", "0"],
  ["5", "0", "1", "0", "1"],
  ["10", "1", "0", "0", "0"]
]

解释：
点菜展示表如下所示：
Table,Beef Burrito,Ceviche,Fried Chicken,Water
3    ,0           ,2      ,1            ,0
5    ,0           ,1      ,0            ,1
10   ,1           ,0      ,0            ,0
对于餐桌 3：David 点了 "Ceviche" 和 "Fried Chicken"，而 Rous 点了 "Ceviche"
而餐桌 5：Carla 点了 "Water" 和 "Ceviche"
餐桌 10：Corina 点了 "Beef Burrito"
```

示例 2：

```txt
输入：orders = [
  ["James", "12", "Fried Chicken"],
  ["Ratesh", "12", "Fried Chicken"],
  ["Amadeus", "12", "Fried Chicken"],
  ["Adam", "1", "Canadian Waffles"],
  ["Brianna", "1", "Canadian Waffles"]
]

输出：[
  ["Table", "Canadian Waffles", "Fried Chicken"],
  ["1", "2", "0"],
  ["12", "0", "3"]
]

解释：
对于餐桌 1：Adam 和 Brianna 都点了 "Canadian Waffles"
而餐桌 12：James, Ratesh 和 Amadeus 都点了 "Fried Chicken"
```

示例 3：

```txt
输入：orders = [
  ["Laura", "2", "Bean Burrito"],
  ["Jhon", "2", "Beef Burrito"],
  ["Melissa", "2", "Soda"]
]

输出：[
  ["Table", "Bean Burrito", "Beef Burrito", "Soda"],
  ["2", "1", "1", "1"]
]
```

---

提示：

- `1 <= orders.length <= 5 * 10^4`
- `orders[i].length == 3`
- `1 <= customerNamei.length, foodItemi.length <= 20`
- `customerNamei` 和 `foodItemi` 由大小写英文字母及空格字符 `' '` 组成。
- `tableNumberi` 是 `1` 到 `500` 范围内的整数。

## 2. 🎯 s.1 - 哈希表 + 排序

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N + F \log F + T \log T)$，其中 $N$ 是订单数，$F$ 是菜品数，$T$ 是桌号数
- 空间复杂度：$O(N)$，哈希表存储

算法思路：

- 用哈希表记录每张桌子每种菜品的订购数量
- 菜品名按字母序排列，桌号按数字升序排列
- 组装表格输出
