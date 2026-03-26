int isVowel(char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
           c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U';
}

int cmpChar(const void *a, const void *b) {
    return *(char *)a - *(char *)b;
}

char *sortVowels(char *s) {
    int n = strlen(s);
    char *res = (char *)malloc((n + 1) * sizeof(char));
    strcpy(res, s);
    char *vArr = (char *)malloc(n * sizeof(char));
    int vc = 0;
    for (int i = 0; i < n; i++) {
        if (isVowel(s[i])) vArr[vc++] = s[i];
    }
    qsort(vArr, vc, sizeof(char), cmpChar);
    int vi = 0;
    for (int i = 0; i < n; i++) {
        if (isVowel(res[i])) res[i] = vArr[vi++];
    }
    free(vArr);
    return res;
}
