function reverse(x: number): number {
  let ans: number;
  if (x < 0) {
    // x 为负数
    ans = Number('-' + x.toString().substring(1).split('').reverse().join(''));
  } else {
    // x 为正数
    ans = Number(x.toString().split('').reverse().join(''));
  }

  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);

  if (ans < min || ans > max) {
    return 0;
  } else {
    return ans;
  }
}
