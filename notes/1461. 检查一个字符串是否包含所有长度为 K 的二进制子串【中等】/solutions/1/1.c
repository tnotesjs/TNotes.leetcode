bool hasAllCodes(char* s, int k) {
    int n = strlen(s);
    if (n < k) return false;
    int total = 1 << k;
    int mask = total - 1;
    int* seen = (int*)calloc(total, sizeof(int));
    int hash = 0, count = 0;
    for (int i = 0; i < n; i++) {
        hash = ((hash << 1) | (s[i] - '0')) & mask;
        if (i >= k - 1 && !seen[hash]) {
            seen[hash] = 1;
            count++;
            if (count == total) { free(seen); return true; }
        }
    }
    free(seen);
    return false;
}
