int* buildNext(char* pattern, int patternLen) {
    int* next = (int*)calloc(patternLen, sizeof(int));

    for (int i = 1, j = 0; i < patternLen; i++) {
        while (j > 0 && pattern[i] != pattern[j])
            j = next[j - 1];
        if (pattern[i] == pattern[j])
            j++;
        next[i] = j;
    }

    return next;
}

bool kmpSearchRepeated(char* a, char* pattern, int repeatCount, int* next) {
    int aLen = strlen(a);
    int patternLen = strlen(pattern);
    int totalLen = aLen * repeatCount;

    for (int i = 0, j = 0; i < totalLen; i++) {
        char ch = a[i % aLen];

        while (j > 0 && ch != pattern[j])
            j = next[j - 1];
        if (ch == pattern[j])
            j++;
        if (j == patternLen)
            return true;
    }

    return false;
}

int repeatedStringMatch(char* a, char* b) {
    int aLen = strlen(a);
    int bLen = strlen(b);
    int need = (bLen + aLen - 1) / aLen;
    int* next = buildNext(b, bLen);

    if (kmpSearchRepeated(a, b, need, next)) {
        free(next);
        return need;
    }
    if (kmpSearchRepeated(a, b, need + 1, next)) {
        free(next);
        return need + 1;
    }

    free(next);
    return -1;
}
