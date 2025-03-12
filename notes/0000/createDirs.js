/**
 * 根据给定的 dirs 初始化目录
 * 每个目录中的含有一个 README.md 文件
 * 文件内容第一行为 `# ${dir}` 其中 dir 表示当前目录的名称。
 */
const fs = require('fs');
const path = require('path');

const dirs = [
  '2623. 记忆函数',
  '2624. 蜗牛排序',
  '2628. 完全相等的 JSON 字符串',
  '2630. 记忆函数 II',
  '2631. 分组',
  '2633. 将对象转换为 JSON 字符串',
  '2636. Promise 对象池',
  '2637. 有时间限制的 Promise 对象',
  '2649. 嵌套数组生成器',
  '2650. 设计可取消函数',
  '2675. 将对象数组转换为矩阵',
  '2691. 不可变辅助工具',
  '2692. 使对象不可变',
  '2693. 使用自定义上下文调用函数',
  '2700. 两个对象之间的差异',
  '2705. 精简对象',
  '2721. 并行执行异步函数',
  '2754. 将函数绑定到上下文',
  '2755. 深度合并两个对象',
  '2756. 批处理查询',
  '2757. 生成循环数组的值',
  '2759. 将 JSON 字符串转换为对象',
  '2776. 转换回调函数为 Promise 函数',
  '2777. 日期范围生成器',
  '2795. 并行执行 Promise 以获取独有的结果',
  '2805. 自定义间隔',
  '2821. 延迟每个 Promise 对象的解析',
  '2823. 深度对象筛选',
];

// 遍历目录列表并创建目录和 README.md 文件
dirs.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  const readmePath = path.join(dirPath, 'README.md');

  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }

  // 创建 README.md 文件
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, `# ${dir}\n`);
    console.log(`Created README.md in: ${dir}`);
  }
});

console.log('All directories and README.md files have been created.');
