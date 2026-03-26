int numberOfWays(int n, int x) {
  const int MOD = 1000000007;
  int dp[301] = {0};
  dp[0] = 1;
  for (int i = 1; ; i++) {
    long long v = 1;
    for (int j = 0; j < x; j++) v *= i;
    if (v > n) break;
    for (int j = n; j >= (int)v; j--) {
      dp[j] = (dp[j] + dp[j - (int)v]) % MOD;
    }
  }
  return dp[n];
}
