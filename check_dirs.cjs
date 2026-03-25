const fs = require('fs');
const path = require('path');

const base = '/Users/huyouda/tnotesjs/TNotes.leetcode/notes';
const dirs = [
  "1500. 设计文件分享系统【中等】",
  "1501. 可以放心投资的国家【中等】",
  "1503. 所有蚂蚁掉下来前的最后一刻【中等】",
  "1504. 统计全 1 子矩形【中等】",
  "1506. 找到 N 叉树的根节点【中等】",
  "1508. 子数组和排序后的区间和【中等】",
  "1509. 三次操作后最大值与最小值的最小差【中等】",
  "1513. 仅含 1 的子串数【中等】",
  "1514. 概率最大的路径【中等】",
  "1519. 子树中标签相同的节点数【中等】",
  "1522. N 叉树的直径【中等】",
  "1524. 和为奇数的子数组数目【中等】",
  "1525. 字符串的好分割数目【中等】",
  "1529. 最少的后缀翻转次数【中等】",
  "1530. 好叶子节点对的数量【中等】",
  "1532. 最近的三笔订单【中等】",
  "1533. 找到最大整数的索引【中等】",
  "1535. 找出数组游戏的赢家【中等】",
  "1536. 排布二进制网格的最少交换次数【中等】",
  "1538. 找出隐藏数组中出现次数最多的元素【中等】",
  "1540. K 次操作转变字符串【中等】",
  "1541. 平衡括号字符串的最少插入次数【中等】",
  "1545. 找出第 N 个二进制字符串中的第 K 位【中等】",
  "1546. 和为目标值且不重叠的非空子数组的最大数目【中等】",
  "1549. 每件商品的最新订单【中等】",
  "1551. 使数组中所有元素相等的最小操作数【中等】",
  "1552. 两球之间的磁力【中等】",
  "1554. 只有一个不同字符的字符串【中等】",
  "1555. 银行账户概要【中等】",
  "1557. 可以到达所有点的最少点数目【中等】",
  "1558. 得到目标数组的最少函数调用次数【中等】",
  "1559. 二维网格图中探测环【中等】",
  "1561. 你可以获得的最大硬币数目【中等】",
  "1562. 查找大小为 M 的最新分组【中等】",
  "1564. 把箱子放进仓库里 I【中等】",
  "1567. 乘积为正数的最长子数组长度【中等】",
  "1570. 两个稀疏向量的点积【中等】",
  "1573. 分割字符串的方案数【中等】",
  "1574. 删除最短的子数组使剩余数组有序【中等】",
  "1577. 数的平方等于两数乘积的方法数【中等】",
  "1578. 使绳子变成彩色的最短时间【中等】",
  "1580. 把箱子放进仓库里 II【中等】",
  "1583. 统计不开心的朋友【中等】",
  "1584. 连接所有点的最小费用【中等】",
  "1586. 二叉搜索树迭代器 II【中等】",
  "1589. 所有排列中的最大和【中等】",
  "1590. 使数组和能被 P 整除【中等】",
  "1593. 拆分字符串使唯一子字符串的数目最大【中等】",
  "1594. 矩阵的最大非负积【中等】",
  "1596. 每位顾客最经常订购的商品【中等】",
  "1599. 经营摩天轮的最大利润【中等】",
];

const results = [];

for (const d of dirs) {
  const num = d.match(/^(\d+)/)[1];
  const dirPath = path.join(base, d);
  
  // Check README
  let readmeStatus;
  const readmePath = path.join(dirPath, 'README.md');
  if (!fs.existsSync(readmePath)) {
    readmeStatus = 'no-readme';
  } else {
    const content = fs.readFileSync(readmePath, 'utf-8');
    if (/## \d+\. 🎯 s\.1/.test(content)) {
      readmeStatus = 'yes';
    } else {
      readmeStatus = 'no';
    }
  }
  
  // Check solutions/1/1.js
  let codeStatus;
  const jsPath = path.join(dirPath, 'solutions', '1', '1.js');
  if (!fs.existsSync(jsPath)) {
    codeStatus = 'missing';
  } else {
    const content = fs.readFileSync(jsPath, 'utf-8').trim();
    if (/^\s*\/\/\s*todo\s*$/i.test(content)) {
      codeStatus = 'todo';
    } else {
      codeStatus = 'implemented';
    }
  }
  
  results.push(`${num}|${readmeStatus}|${codeStatus}`);
}

console.log(results.join('\n'));
