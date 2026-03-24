int maximumSwap(int num) {
    char s[12];
    sprintf(s, "%d", num);
    int len = strlen(s);
    int last[10];
    memset(last, -1, sizeof(last));
    for (int i = 0; i < len; i++) last[s[i] - '0'] = i;
    for (int i = 0; i < len; i++) {
        for (int d = 9; d > s[i] - '0'; d--) {
            if (last[d] > i) {
                char tmp = s[i]; s[i] = s[last[d]]; s[last[d]] = tmp;
                return atoi(s);
            }
        }
    }
    return num;
}
