void dfs(char* s, int i, int n, char* path, char*** res, int* resSize) {
    if (i == n) {
        (*res)[*resSize] = (char*)malloc(n + 1);
        memcpy((*res)[*resSize], path, n + 1);
        (*resSize)++;
        return;
    }
    if (s[i] >= '0' && s[i] <= '9') {
        path[i] = s[i];
        dfs(s, i + 1, n, path, res, resSize);
    } else {
        path[i] = s[i] | 32; // lowercase
        dfs(s, i + 1, n, path, res, resSize);
        path[i] = s[i] & ~32; // uppercase
        dfs(s, i + 1, n, path, res, resSize);
    }
}

char** letterCasePermutation(char* s, int* returnSize) {
    int n = strlen(s);
    int maxSize = 1;
    for (int i = 0; i < n; i++) if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) maxSize *= 2;
    char** res = (char**)malloc(sizeof(char*) * maxSize);
    char* path = (char*)malloc(n + 1);
    path[n] = '\0';
    *returnSize = 0;
    dfs(s, 0, n, path, &res, returnSize);
    free(path);
    return res;
}
