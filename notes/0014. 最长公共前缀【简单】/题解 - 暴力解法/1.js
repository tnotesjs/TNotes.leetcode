var longestCommonPrefix = function (strs) {
  // 找到长度最小的字符串
  let minStr = strs[0];
  for (let i = 1; i < strs.length; i++)
    minStr = strs[i].length < minStr.length ? strs[i] : minStr;

  // 挨个遍历每个成员，从每个成员的首字符开始检查
  for (let i = 0; i < minStr.length; i++)
    for (let j = 0; j < strs.length; j++)
      if (strs[j][i] !== minStr[i]) return minStr.slice(0, i);

  return minStr;
};
