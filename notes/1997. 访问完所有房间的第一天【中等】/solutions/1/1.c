#define MOD1997 1000000007

int firstDayBeenInAllRooms(int* nextVisit, int nextVisitSize) {
  int n = nextVisitSize;
  long long* dp = (long long*)calloc(n, sizeof(long long));
  for (int i = 1; i < n; i++) {
    dp[i] = (2 * dp[i-1] - dp[nextVisit[i-1]] + 2 + MOD1997) % MOD1997;
  }
  int ans = (int)dp[n-1];
  free(dp);
  return ans;
}
