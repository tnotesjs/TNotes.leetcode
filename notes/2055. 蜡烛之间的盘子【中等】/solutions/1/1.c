/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* platesBetweenCandles(char* s, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int n = strlen(s);
    int* prefix = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + (s[i] == '*' ? 1 : 0);
    }
    int* left = (int*)malloc(n * sizeof(int));
    int* right = (int*)malloc(n * sizeof(int));
    left[0] = s[0] == '|' ? 0 : -1;
    for (int i = 1; i < n; i++) {
        left[i] = s[i] == '|' ? i : left[i - 1];
    }
    right[n - 1] = s[n - 1] == '|' ? n - 1 : -1;
    for (int i = n - 2; i >= 0; i--) {
        right[i] = s[i] == '|' ? i : right[i + 1];
    }
    *returnSize = queriesSize;
    int* ans = (int*)malloc(queriesSize * sizeof(int));
    for (int i = 0; i < queriesSize; i++) {
        int l = right[queries[i][0]];
        int r = left[queries[i][1]];
        ans[i] = (l != -1 && r != -1 && l < r) ? prefix[r] - prefix[l] : 0;
    }
    free(prefix); free(left); free(right);
    return ans;
}
