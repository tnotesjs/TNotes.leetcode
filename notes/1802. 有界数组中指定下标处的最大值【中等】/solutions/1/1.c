long long calc1802(long long val, long long cnt) {
  if (val >= cnt) return (val + val - cnt + 1) * cnt / 2;
  return val * (val + 1) / 2 + (cnt - val);
}

int maxValue(int n, int index, int maxSum) {
  int lo = 1, hi = maxSum;
  while (lo < hi) {
    int mid = lo + (hi - lo + 1) / 2;
    long long left = calc1802(mid, index + 1);
    long long right = calc1802(mid, n - index);
    if (left + right - mid <= maxSum) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}
