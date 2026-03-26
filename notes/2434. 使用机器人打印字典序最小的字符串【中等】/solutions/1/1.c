char* robotWithString(char* s) {
    int n = strlen(s);
    char *suffixMin = (char *)malloc((n + 1) * sizeof(char));
    suffixMin[n] = 'z';
    for (int i = n - 1; i >= 0; i--) {
        suffixMin[i] = s[i] < suffixMin[i + 1] ? s[i] : suffixMin[i + 1];
    }
    char *stack = (char *)malloc(n * sizeof(char));
    char *res = (char *)malloc((n + 1) * sizeof(char));
    int top = 0, ri = 0;
    for (int i = 0; i < n; i++) {
        stack[top++] = s[i];
        while (top > 0 && stack[top - 1] <= suffixMin[i + 1]) {
            res[ri++] = stack[--top];
        }
    }
    while (top > 0) res[ri++] = stack[--top];
    res[ri] = '\0';
    free(suffixMin);
    free(stack);
    return res;
}
