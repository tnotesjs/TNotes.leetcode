int nextBeautifulNumber(int n) {
    for (int i = n + 1; ; i++) {
        int cnt[10] = {0};
        int x = i;
        while (x > 0) { cnt[x % 10]++; x /= 10; }
        int ok = 1;
        for (int d = 0; d <= 9; d++) {
            if (cnt[d] != 0 && cnt[d] != d) { ok = 0; break; }
        }
        if (ok) return i;
    }
}
