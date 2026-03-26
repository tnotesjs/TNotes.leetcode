/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findThePrefixCommonArray(int* A, int ASize, int* B, int BSize, int* returnSize) {
    int n = ASize;
    *returnSize = n;
    int* C = (int*)malloc(n * sizeof(int));
    int* cnt = (int*)calloc(n + 1, sizeof(int));
    int common = 0;
    for (int i = 0; i < n; i++) {
        cnt[A[i]]++;
        if (cnt[A[i]] == 2) common++;
        cnt[B[i]]++;
        if (cnt[B[i]] == 2) common++;
        C[i] = common;
    }
    free(cnt);
    return C;
}
