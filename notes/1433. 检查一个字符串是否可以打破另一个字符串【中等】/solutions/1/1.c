int cmpChar(const void* a, const void* b) {
    return *(char*)a - *(char*)b;
}

bool checkIfCanBreak(char* s1, char* s2) {
    int n = strlen(s1);
    char* a = (char*)malloc(n + 1);
    char* b = (char*)malloc(n + 1);
    strcpy(a, s1); strcpy(b, s2);
    qsort(a, n, sizeof(char), cmpChar);
    qsort(b, n, sizeof(char), cmpChar);
    int s1Breaks = 1, s2Breaks = 1;
    for (int i = 0; i < n; i++) {
        if (a[i] < b[i]) s1Breaks = 0;
        if (b[i] < a[i]) s2Breaks = 0;
    }
    free(a); free(b);
    return s1Breaks || s2Breaks;
}
