/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* goodDaysToRobBank(int* security, int securitySize, int time, int* returnSize) {
    int n = securitySize;
    int* dec = (int*)calloc(n, sizeof(int));
    int* inc = (int*)calloc(n, sizeof(int));
    for (int i = 1; i < n; i++) {
        if (security[i] <= security[i - 1]) dec[i] = dec[i - 1] + 1;
    }
    for (int i = n - 2; i >= 0; i--) {
        if (security[i] <= security[i + 1]) inc[i] = inc[i + 1] + 1;
    }
    int* ans = (int*)malloc(n * sizeof(int));
    int cnt = 0;
    for (int i = time; i < n - time; i++) {
        if (dec[i] >= time && inc[i] >= time) ans[cnt++] = i;
    }
    *returnSize = cnt;
    free(dec); free(inc);
    return ans;
}
