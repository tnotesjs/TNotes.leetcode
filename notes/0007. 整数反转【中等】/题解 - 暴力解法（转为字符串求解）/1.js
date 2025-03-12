var reverse = function (x) {
  let ans;
  if (x < 0) {
    // x 为负数
    ans = '-' + x.toString().substring(1).split('').reverse().join('') - 0;
  } else {
    // x 为正数
    ans = x.toString().split('').reverse().join('') - 0;
  }

  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);

  if (ans < min || ans > max) {
    return 0;
  } else {
    return ans;
  }
};
