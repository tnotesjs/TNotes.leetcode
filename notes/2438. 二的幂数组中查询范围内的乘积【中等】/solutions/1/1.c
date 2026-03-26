/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* productQueries(int n, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    long long MOD = 1000000007;
    int powers[32], pCnt = 0;
    while (n) {
        int lb = n & (-n);
        powers[pCnt++] = lb;
        n -= lb;
    }
    *returnSize = queriesSize;
    int *ans = (int *)malloc(queriesSize * sizeof(int));
    for (int q = 0; q < queriesSize; q++) {
        int l = queries[q][0], r = queries[q][1];
        long long prod = 1;
        for (int i = l; i <= r; i++) {
            prod = prod * powers[i] % MOD;
        }
        ans[q] = (int)prod;
    }
    return ans;
}
