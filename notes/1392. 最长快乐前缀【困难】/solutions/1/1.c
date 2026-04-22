char* longestPrefix(char* s) {
    int n = strlen(s);
    int* lps = (int*)calloc(n, sizeof(int));

    for (int i = 1; i < n; i++) {
        int j = lps[i - 1];
        while (j > 0 && s[i] != s[j])
            j = lps[j - 1];
        if (s[i] == s[j])
            j++;
        lps[i] = j;
    }

    int prefixLen = lps[n - 1];
    char* result = (char*)malloc((prefixLen + 1) * sizeof(char));
    if (prefixLen > 0)
        memcpy(result, s, prefixLen);
    result[prefixLen] = '\0';

    free(lps);
    return result;
}
