function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const arr = x.toString().split(''); // 转化为数组
  const len = arr.length;
  let endIndex = len - 1; // 数组的最后一个下标
  for (let i = 0; i <= len / 2; i++) {
    if (arr[i] !== arr[endIndex - i]) return false;
  }
  return true;
}
