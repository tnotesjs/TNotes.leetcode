#include <stdlib.h>

static int* gScores;
static int* gAges;

int cmp1626(const void* a, const void* b) {
    int i = *(int*)a, j = *(int*)b;
    if (gAges[i] != gAges[j]) return gAges[i] - gAges[j];
    return gScores[i] - gScores[j];
}

int bestTeamScore(int* scores, int scoresSize, int* ages, int agesSize) {
    int n = scoresSize;
    gScores = scores; gAges = ages;
    int* idx = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) idx[i] = i;
    qsort(idx, n, sizeof(int), cmp1626);
    int* dp = (int*)malloc(n * sizeof(int));
    int res = 0;
    for (int i = 0; i < n; i++) {
        dp[i] = scores[idx[i]];
        for (int j = 0; j < i; j++)
            if (scores[idx[j]] <= scores[idx[i]])
                if (dp[j] + scores[idx[i]] > dp[i])
                    dp[i] = dp[j] + scores[idx[i]];
        if (dp[i] > res) res = dp[i];
    }
    free(idx); free(dp);
    return res;
}
