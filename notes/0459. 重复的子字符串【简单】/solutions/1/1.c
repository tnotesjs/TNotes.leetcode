bool repeatedSubstringPattern(char* s) {
    int n = strlen(s);

    for (int len = 1; len <= n / 2; len++) {
        if (n % len != 0)
            continue;

        int repeatCount = n / len;
        char* repeated = (char*)malloc((n + 1) * sizeof(char));
        for (int i = 0; i < repeatCount; i++)
            memcpy(repeated + i * len, s, len);
        repeated[n] = '\0';

        if (strcmp(repeated, s) == 0) {
            free(repeated);
            return true;
        }

        free(repeated);
    }

    return false;
}
