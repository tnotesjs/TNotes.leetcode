int cmpChar(const void* a, const void* b) { return *(char*)a - *(char*)b; }

int numSpecialEquivGroups(char** words, int wordsSize) {
    char sigs[wordsSize][101];
    for (int i = 0; i < wordsSize; i++) {
        int n = strlen(words[i]);
        char even[51], odd[51];
        int eLen = 0, oLen = 0;
        for (int j = 0; j < n; j++) {
            if (j % 2 == 0) even[eLen++] = words[i][j];
            else odd[oLen++] = words[i][j];
        }
        qsort(even, eLen, sizeof(char), cmpChar);
        qsort(odd, oLen, sizeof(char), cmpChar);
        even[eLen] = '\0'; odd[oLen] = '\0';
        sprintf(sigs[i], "%s|%s", even, odd);
    }
    int res = 0;
    for (int i = 0; i < wordsSize; i++) {
        bool dup = false;
        for (int j = 0; j < i; j++)
            if (strcmp(sigs[i], sigs[j]) == 0) { dup = true; break; }
        if (!dup) res++;
    }
    return res;
}
