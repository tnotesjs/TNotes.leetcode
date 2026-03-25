char* getHappyString(int n, int k) {
    int total = 3 * (1 << (n - 1));
    char* res = (char*)malloc(n + 1);
    if (k > total) { res[0] = '\0'; return res; }
    k--;
    char chars[] = "abc";
    int groupSize = 1 << (n - 1);
    res[0] = chars[k / groupSize];
    k %= groupSize;
    for (int i = 1; i < n; i++) {
        int size = 1 << (n - 1 - i);
        int idx = k / size;
        char prev = res[i - 1];
        int ci = 0;
        for (int j = 0; j < 3; j++) {
            if (chars[j] != prev) {
                if (ci == idx) { res[i] = chars[j]; break; }
                ci++;
            }
        }
        k %= size;
    }
    res[n] = '\0';
    return res;
}
