int minChanges(char* s) {
    int res = 0;
    int n = strlen(s);
    for (int i = 0; i < n; i += 2) {
        if (s[i] != s[i + 1]) res++;
    }
    return res;
}
