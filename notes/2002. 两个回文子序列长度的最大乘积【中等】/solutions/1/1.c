int maxProduct(char* s) {
    int n = strlen(s);
    int total = 1 << n;
    int* palinLen = (int*)calloc(total, sizeof(int));
    for (int mask = 1; mask < total; mask++) {
        char sub[13];
        int idx = 0;
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) sub[idx++] = s[i];
        }
        int l = 0, r = idx - 1, ok = 1;
        while (l < r) {
            if (sub[l] != sub[r]) { ok = 0; break; }
            l++; r--;
        }
        palinLen[mask] = ok ? idx : 0;
    }
    int ans = 0;
    for (int m1 = 1; m1 < total; m1++) {
        if (!palinLen[m1]) continue;
        int comp = (total - 1) ^ m1;
        for (int m2 = comp; m2 > 0; m2 = (m2 - 1) & comp) {
            if (palinLen[m2] && palinLen[m1] * palinLen[m2] > ans) {
                ans = palinLen[m1] * palinLen[m2];
            }
        }
    }
    free(palinLen);
    return ans;
}
