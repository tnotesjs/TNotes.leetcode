var longestPalindrome = function (s) {
  const len = s.length;

  if (len < 2) return s;

  let maxLen = 0;
  let ans = [0, 1];
  // ans[0] 记录起始位置
  // ans[1] 记录长度

  for (let i = 0; i < len - 1; i++) {
    const odd = centerSpread(s, i, i);
    const even = centerSpread(s, i, i + 1);
    const max = odd[1] > even[1] ? odd : even;
    if (max[1] > maxLen) {
      ans = max;
      maxLen = max[1];
    }
  }

  return s.slice(ans[0], ans[0] + ans[1]);
};

function centerSpread(s, l, r) {
  let len = s.length;
  while (l >= 0 && r <= len - 1) {
    // 如果不相等，结束循环
    if (s[l] !== s[r]) break;

    // 如果相等，则继续往两侧扩散，准备下一次判断
    l--;
    r++;
  }
  // 两侧各回退到上一步所在的位置（while 循环结束有两种可能：1. 有指针溢出；2. 不满足扩散条件）
  l++;
  r--;
  return [l, r - l + 1];
}
