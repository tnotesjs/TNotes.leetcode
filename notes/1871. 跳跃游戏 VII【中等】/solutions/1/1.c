#include <stdbool.h>
#include <string.h>

bool canReach(char* s, int minJump, int maxJump) {
  int n = strlen(s);
  if (s[n - 1] == '1') return false;
  bool* dp = (bool*)calloc(n, sizeof(bool));
  dp[0] = true;
  int cnt = 0;
  for (int i = 1; i < n; i++) {
    if (i >= minJump) cnt += dp[i - minJump] ? 1 : 0;
    if (i > maxJump) cnt -= dp[i - maxJump - 1] ? 1 : 0;
    dp[i] = (s[i] == '0') && (cnt > 0);
  }
  bool ans = dp[n - 1];
  free(dp);
  return ans;
}
