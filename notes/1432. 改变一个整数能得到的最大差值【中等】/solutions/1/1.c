int maxDiff(int num) {
    char s[12];
    sprintf(s, "%d", num);
    int n = strlen(s);
    // 求最大值
    char maxS[12]; strcpy(maxS, s);
    char tx = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] != '9') { tx = s[i]; break; }
    }
    if (tx) for (int i = 0; i < n; i++) if (maxS[i] == tx) maxS[i] = '9';
    // 求最小值
    char minS[12]; strcpy(minS, s);
    if (s[0] != '1') {
        char r = s[0];
        for (int i = 0; i < n; i++) if (minS[i] == r) minS[i] = '1';
    } else {
        char r = 0;
        for (int i = 1; i < n; i++) {
            if (s[i] != '0' && s[i] != '1') { r = s[i]; break; }
        }
        if (r) for (int i = 0; i < n; i++) if (minS[i] == r) minS[i] = '0';
    }
    return atoi(maxS) - atoi(minS);
}
