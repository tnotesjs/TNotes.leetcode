bool repeatedSubstringPattern(char* s) {
    int n = strlen(s);
    if (n < 2)
        return false;

    char* combined = (char*)malloc((2 * n + 1) * sizeof(char));
    memcpy(combined, s, n);
    memcpy(combined + n, s, n);
    combined[2 * n] = '\0';
    combined[2 * n - 1] = '\0';

    bool found = strstr(combined + 1, s) != NULL;
    free(combined);
    return found;
}
