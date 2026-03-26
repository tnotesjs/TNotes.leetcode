char* findTheString(int** lcp, int lcpSize, int* lcpColSize) {
    int n = lcpSize;
    int* s = (int*)malloc(n * sizeof(int));
    memset(s, -1, n * sizeof(int));
    int c = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] >= 0) continue;
        if (c >= 26) { free(s); char* r = (char*)calloc(1, 1); return r; }
        s[i] = c;
        for (int j = i + 1; j < n; j++) {
            if (lcp[i][j] > 0 && s[j] < 0) s[j] = c;
        }
        c++;
    }
    int** chk = (int**)malloc((n + 1) * sizeof(int*));
    for (int i = 0; i <= n; i++) chk[i] = (int*)calloc(n + 1, sizeof(int));
    for (int i = n - 1; i >= 0; i--) {
        for (int j = n - 1; j >= 0; j--) {
            if (s[i] == s[j]) chk[i][j] = chk[i + 1][j + 1] + 1;
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (chk[i][j] != lcp[i][j]) {
                for (int k = 0; k <= n; k++) free(chk[k]);
                free(chk); free(s);
                char* r = (char*)calloc(1, 1); return r;
            }
        }
    }
    char* res = (char*)malloc(n + 1);
    for (int i = 0; i < n; i++) res[i] = 'a' + s[i];
    res[n] = '\0';
    for (int k = 0; k <= n; k++) free(chk[k]);
    free(chk); free(s);
    return res;
}
