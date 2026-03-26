typedef struct { int start, gold; } Offer;

int maximizeTheProfit(int n, int** offers, int offersSize, int* offersColSize) {
    // 按 end 分组
    int* gcnt = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < offersSize; i++) gcnt[offers[i][1]]++;
    Offer** groups = (Offer**)malloc(n * sizeof(Offer*));
    for (int i = 0; i < n; i++) {
        groups[i] = (Offer*)malloc(gcnt[i] * sizeof(Offer));
        gcnt[i] = 0;
    }
    for (int i = 0; i < offersSize; i++) {
        int e = offers[i][1];
        groups[e][gcnt[e]++] = (Offer){offers[i][0], offers[i][2]};
    }

    int* dp = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < n; i++) {
        dp[i + 1] = dp[i];
        for (int j = 0; j < gcnt[i]; j++) {
            int val = dp[groups[i][j].start] + groups[i][j].gold;
            if (val > dp[i + 1]) dp[i + 1] = val;
        }
    }
    int ans = dp[n];
    for (int i = 0; i < n; i++) free(groups[i]);
    free(groups); free(gcnt); free(dp);
    return ans;
}
