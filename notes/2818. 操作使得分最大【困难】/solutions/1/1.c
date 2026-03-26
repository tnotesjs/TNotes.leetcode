int* g_nums;
int cmpByValue(const void* a, const void* b) {
  return g_nums[*(int*)b] - g_nums[*(int*)a];
}

long long power(long long base, long long exp, long long mod) {
  long long result = 1;
  base %= mod;
  while (exp > 0) {
    if (exp & 1) result = result * base % mod;
    base = base * base % mod;
    exp >>= 1;
  }
  return result;
}

int maximumScore(int* nums, int numsSize, int k) {
  long long MOD = 1000000007;
  int n = numsSize;
  int* ps = (int*)calloc(n, sizeof(int));
  for (int i = 0; i < n; i++) {
    int x = nums[i], score = 0;
    for (int p = 2; p * p <= x; p++) {
      if (x % p == 0) { score++; while (x % p == 0) x /= p; }
    }
    if (x > 1) score++;
    ps[i] = score;
  }
  int* left = (int*)malloc(n * sizeof(int));
  int* right = (int*)malloc(n * sizeof(int));
  int* stk = (int*)malloc(n * sizeof(int));
  int top = 0;
  for (int i = 0; i < n; i++) right[i] = n;
  for (int i = 0; i < n; i++) {
    while (top > 0 && ps[stk[top - 1]] < ps[i]) right[stk[--top]] = i;
    left[i] = top > 0 ? stk[top - 1] : -1;
    stk[top++] = i;
  }
  int* indices = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) indices[i] = i;
  g_nums = nums;
  qsort(indices, n, sizeof(int), cmpByValue);
  long long ans = 1;
  long long remaining = k;
  for (int idx = 0; idx < n && remaining > 0; idx++) {
    int i = indices[idx];
    long long count = (long long)(i - left[i]) * (right[i] - i);
    long long use = count < remaining ? count : remaining;
    ans = ans * power(nums[i], use, MOD) % MOD;
    remaining -= use;
  }
  free(ps); free(left); free(right); free(stk); free(indices);
  return (int)ans;
}
