char* alphabetBoardPath(char* target) {
    char* res = malloc(500);
    int len = 0, r = 0, c = 0;
    for (int i = 0; target[i]; i++) {
        int code = target[i] - 'a';
        int tr = code / 5, tc = code % 5;
        while (r > tr) { res[len++] = 'U'; r--; }
        while (c > tc) { res[len++] = 'L'; c--; }
        while (r < tr) { res[len++] = 'D'; r++; }
        while (c < tc) { res[len++] = 'R'; c++; }
        res[len++] = '!';
    }
    res[len] = '\0';
    return res;
}
