char* convert(char* s, int numRows) {
    int n = strlen(s);
    int r = numRows;
    if (r == 1 || r >= n) return s;

    int t = r * 2 - 2;
    // 每行分配足够空间（最多 n 个字符）
    char** rows = (char**)malloc(r * sizeof(char*));
    int* lens = (int*)calloc(r, sizeof(int));
    for (int i = 0; i < r; i++) {
        rows[i] = (char*)malloc((n + 1) * sizeof(char));
    }

    int x = 0;
    for (int i = 0; i < n; i++) {
        rows[x][lens[x]++] = s[i];
        if (i % t < r - 1) {
            x++;
        } else {
            x--;
        }
    }

    char* ans = (char*)malloc((n + 1) * sizeof(char));
    int idx = 0;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < lens[i]; j++) {
            ans[idx++] = rows[i][j];
        }
        free(rows[i]);
    }
    ans[idx] = '\0';
    free(rows);
    free(lens);
    return ans;
}
