function reverse(x: number): number {
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  if (ans < min || ans > max) {
    return 0;
  } else {
    return ans;
  }
}
