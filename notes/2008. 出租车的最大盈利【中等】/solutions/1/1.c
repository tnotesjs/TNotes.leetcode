typedef struct {
    int start, tip;
} Ride2008;

long long maxTaxiEarnings(int n, int** rides, int ridesSize, int* ridesColSize) {
    int* rideCnt = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < ridesSize; i++) rideCnt[rides[i][1]]++;
    Ride2008** byEnd = (Ride2008**)calloc(n + 1, sizeof(Ride2008*));
    int* idx = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i <= n; i++) {
        if (rideCnt[i]) byEnd[i] = (Ride2008*)malloc(rideCnt[i] * sizeof(Ride2008));
    }
    for (int i = 0; i < ridesSize; i++) {
        int e = rides[i][1];
        byEnd[e][idx[e]].start = rides[i][0];
        byEnd[e][idx[e]].tip = rides[i][2];
        idx[e]++;
    }
    long long* dp = (long long*)calloc(n + 1, sizeof(long long));
    for (int i = 1; i <= n; i++) {
        dp[i] = dp[i - 1];
        for (int j = 0; j < rideCnt[i]; j++) {
            long long val = dp[byEnd[i][j].start] + (i - byEnd[i][j].start) + byEnd[i][j].tip;
            if (val > dp[i]) dp[i] = val;
        }
    }
    long long ans = dp[n];
    for (int i = 0; i <= n; i++) free(byEnd[i]);
    free(byEnd); free(rideCnt); free(idx); free(dp);
    return ans;
}
