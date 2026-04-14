int strStr(char* haystack, char* needle) {
    int n = strlen(haystack);
    int m = strlen(needle);

    if (m == 0)
        return 0;

    int* next = (int*)malloc(sizeof(int) * m);
    next[0] = 0;

    for (int i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] != needle[j])
            j = next[j - 1];
        if (needle[i] == needle[j])
            j++;
        next[i] = j;
    }

    for (int i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] != needle[j])
            j = next[j - 1];
        if (haystack[i] == needle[j])
            j++;
        if (j == m) {
            free(next);
            return i - m + 1;
        }
    }

    free(next);
    return -1;
}
