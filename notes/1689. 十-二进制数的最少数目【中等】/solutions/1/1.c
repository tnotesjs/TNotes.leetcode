int minPartitions(char* n) {
    int res = 0;
    for (int i = 0; n[i]; i++) {
        int d = n[i] - '0';
        if (d > res) res = d;
    }
    return res;
}
