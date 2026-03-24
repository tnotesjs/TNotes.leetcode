int magicalString(int n) {
    if (n == 0) return 0;
    if (n <= 3) return 1;
    int* s = (int*)malloc(sizeof(int) * (n + 2));
    s[0] = 1; s[1] = 2; s[2] = 2;
    int len = 3, i = 2;
    while (len < n) {
        int next = s[len - 1] == 1 ? 2 : 1;
        int count = s[i];
        for (int j = 0; j < count && len < n; j++) s[len++] = next;
        i++;
    }
    int res = 0;
    for (int k = 0; k < n; k++) if (s[k] == 1) res++;
    free(s);
    return res;
}
