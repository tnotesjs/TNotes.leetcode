bool queryString(char* s, int n) {
    for (int i = 1; i <= n; i++) {
        char bin[32];
        int len = 0, val = i;
        while (val > 0) {
            bin[len++] = '0' + (val & 1);
            val >>= 1;
        }
        // reverse
        for (int l = 0, r = len - 1; l < r; l++, r--) {
            char tmp = bin[l]; bin[l] = bin[r]; bin[r] = tmp;
        }
        bin[len] = '\0';
        if (strstr(s, bin) == NULL) return false;
    }
    return true;
}
