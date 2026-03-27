/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* beautifulIndices(char* s, char* a, char* b, int k, int* returnSize) {
    int n = strlen(s), la = strlen(a), lb = strlen(b);
    int* posA = malloc(n * sizeof(int));
    int cntA = 0;
    for (int i = 0; i <= n - la; i++)
        if (strncmp(s + i, a, la) == 0) posA[cntA++] = i;
    int* posB = malloc(n * sizeof(int));
    int cntB = 0;
    for (int i = 0; i <= n - lb; i++)
        if (strncmp(s + i, b, lb) == 0) posB[cntB++] = i;

    int* res = malloc(cntA * sizeof(int));
    int cnt = 0;
    for (int idx = 0; idx < cntA; idx++) {
        int i = posA[idx];
        int lo = 0, hi = cntB - 1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (posB[mid] < i - k) lo = mid + 1;
            else hi = mid - 1;
        }
        if (lo < cntB && posB[lo] <= i + k)
            res[cnt++] = i;
    }
    free(posA);
    free(posB);
    *returnSize = cnt;
    return res;
}
