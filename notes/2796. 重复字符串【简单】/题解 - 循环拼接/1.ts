interface String {
  replicate(times: number): string;
}

String.prototype.replicate = function (times): string {
  let ans = ''
  for (let i = 0; i < times; i++) {
    ans += this
  }
  return ans
}