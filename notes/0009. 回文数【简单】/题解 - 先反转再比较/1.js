var isPalindrome = function (x) {
  if (x < 0) return false;
  const originalNum = x; // 原始值
  let resultNum = 0; // 经过反转后的结果
  while (x !== 0) {
    resultNum = resultNum * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return originalNum === resultNum;
};
