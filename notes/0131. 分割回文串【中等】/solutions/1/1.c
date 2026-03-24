/**
 * Return an array of arrays of strings.
 * The sizes of these arrays are returned as *returnSize and **returnColumnSizes respectively.
 */
void backtrack(char* s, int n, bool** dp, char**** res, int* returnSize, int** returnColumnSizes, char** path, int pathLen, int start) {
    if (start == n) {
        *res = realloc(*res, sizeof(char**) * (*returnSize + 1));
        (*res)[*returnSize] = malloc(sizeof(char*) * pathLen);
        *returnColumnSizes = realloc(*returnColumnSizes, sizeof(int) * (*returnSize + 1));
        (*returnColumnSizes)[*returnSize] = pathLen;
        for (int i = 0; i < pathLen; i++) {
            (*res)[*returnSize][i] = malloc(strlen(path[i]) + 1);
            strcpy((*res)[*returnSize][i], path[i]);
        }
        (*returnSize)++;
        return;
    }
    for (int end = start; end < n; end++) {
        if (dp[start][end]) {
            int len = end - start + 1;
            path[pathLen] = malloc(len + 1);
            strncpy(path[pathLen], s + start, len);
            path[pathLen][len] = '\0';
            backtrack(s, n, dp, res, returnSize, returnColumnSizes, path, pathLen + 1, end + 1);
            free(path[pathLen]);
        }
    }
}

char*** partition(char* s, int* returnSize, int** returnColumnSizes) {
    int n = strlen(s);
    // 预处理回文串 DP
    bool** dp = malloc(sizeof(bool*) * n);
    for (int i = 0; i < n; i++) {
        dp[i] = malloc(sizeof(bool) * n);
        for (int j = 0; j < n; j++) dp[i][j] = true;
    }
    for (int i = n - 1; i >= 0; i--) {
        for (int j = i + 1; j < n; j++) {
            dp[i][j] = (s[i] == s[j]) && dp[i + 1][j - 1];
        }
    }
    char*** res = NULL;
    *returnSize = 0;
    *returnColumnSizes = NULL;
    char** path = malloc(sizeof(char*) * n);
    backtrack(s, n, dp, &res, returnSize, returnColumnSizes, path, 0, 0);
    free(path);
    for (int i = 0; i < n; i++) free(dp[i]);
    free(dp);
    return res;
}
