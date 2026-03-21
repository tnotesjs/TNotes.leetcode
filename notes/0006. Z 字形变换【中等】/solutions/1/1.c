char* convert(char* s, int numRows) {
    int n = strlen(s);
    int r = numRows;
    if (r == 1 || r >= n) return s;

    int t = r * 2 - 2;
    int c = ((n + t - 1) / t) * (r - 1);

    // 分配二维矩阵（r 行 c 列），初始化为 0
    char* mat = (char*)calloc(r * c, sizeof(char));

    int x = 0, y = 0;
    for (int i = 0; i < n; i++) {
        mat[x * c + y] = s[i];
        if (i % t < r - 1) {
            x++; // 向下移动
        } else {
            x--;
            y++; // 向右上移动
        }
    }

    char* ans = (char*)malloc((n + 1) * sizeof(char));
    int idx = 0;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (mat[i * c + j] != 0) {
                ans[idx++] = mat[i * c + j];
            }
        }
    }
    ans[idx] = '\0';
    free(mat);
    return ans;
}
