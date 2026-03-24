#include <string.h>
#include <limits.h>

int findCheapestPrice(int n, int** flights, int flightsSize, int* flightsColSize, int src, int dst, int k) {
    int* dp = (int*)malloc(sizeof(int) * n);
    int* tmp = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++) dp[i] = INT_MAX;
    dp[src] = 0;
    for (int i = 0; i <= k; i++) {
        memcpy(tmp, dp, sizeof(int) * n);
        for (int j = 0; j < flightsSize; j++) {
            int u = flights[j][0], v = flights[j][1], w = flights[j][2];
            if (dp[u] != INT_MAX && dp[u] + w < tmp[v]) tmp[v] = dp[u] + w;
        }
        memcpy(dp, tmp, sizeof(int) * n);
    }
    int res = dp[dst];
    free(dp); free(tmp);
    return res == INT_MAX ? -1 : res;
}
