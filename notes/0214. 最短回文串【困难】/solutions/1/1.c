static char* copyString(const char* s, int n) {
    char* copy = (char*)malloc((n + 1) * sizeof(char));
    memcpy(copy, s, n);
    copy[n] = '\0';
    return copy;
}

char* shortestPalindrome(char* s) {
    int n = strlen(s);
    if (n < 2)
        return copyString(s, n);

    char* reversed = (char*)malloc((n + 1) * sizeof(char));
    for (int i = 0; i < n; i++)
        reversed[i] = s[n - 1 - i];
    reversed[n] = '\0';

    int combinedLen = 2 * n + 1;
    char* combined = (char*)malloc((combinedLen + 1) * sizeof(char));
    memcpy(combined, s, n);
    combined[n] = '#';
    memcpy(combined + n + 1, reversed, n);
    combined[combinedLen] = '\0';

    int* lps = (int*)calloc(combinedLen, sizeof(int));
    for (int i = 1; i < combinedLen; i++) {
        int j = lps[i - 1];
        while (j > 0 && combined[i] != combined[j])
            j = lps[j - 1];
        if (combined[i] == combined[j])
            j++;
        lps[i] = j;
    }

    int longestPrefixLength = lps[combinedLen - 1];
    int suffixLen = n - longestPrefixLength;
    char* result = (char*)malloc((n + suffixLen + 1) * sizeof(char));

    for (int i = 0; i < suffixLen; i++)
        result[i] = s[n - 1 - i];
    memcpy(result + suffixLen, s, n);
    result[n + suffixLen] = '\0';

    free(reversed);
    free(combined);
    free(lps);
    return result;
}
