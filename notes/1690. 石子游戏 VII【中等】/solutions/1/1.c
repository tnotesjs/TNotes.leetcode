#include <stdlib.h>

int stoneGameVII(int* stones, int stonesSize) {
    int n = stonesSize;
    int* prefix = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < n; i++) prefix[i+1] = prefix[i] + stones[i];
    int** dp = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)calloc(n, sizeof(int));
    }
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            int sum = prefix[j+1] - prefix[i];
            int a = sum - stones[i] - dp[i+1][j];
            int b = sum - stones[j] - dp[i][j-1];
            dp[i][j] = a > b ? a : b;
        }
    }
    int res = dp[0][n-1];
    for (int i = 0; i < n; i++) free(dp[i]);
    free(dp);
    free(prefix);
    return res;
}
