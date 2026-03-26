int minimumPartition(char* s, int k) {
    int count = 1;
    long long cur = 0;
    for (int i = 0; s[i]; i++) {
        int d = s[i] - '0';
        if (d > k) return -1;
        cur = cur * 10 + d;
        if (cur > k) {
            count++;
            cur = d;
        }
    }
    return count;
}
