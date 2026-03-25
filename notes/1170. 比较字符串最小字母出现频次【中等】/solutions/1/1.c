int f(char* s) {
    char minChar = 'z' + 1;
    int len = strlen(s);
    for (int i = 0; i < len; i++) {
        if (s[i] < minChar) minChar = s[i];
    }
    int count = 0;
    for (int i = 0; i < len; i++) {
        if (s[i] == minChar) count++;
    }
    return count;
}

int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int* numSmallerByFrequency(char** queries, int queriesSize, char** words, int wordsSize, int* returnSize) {
    int* wf = (int*)malloc(sizeof(int) * wordsSize);
    for (int i = 0; i < wordsSize; i++) wf[i] = f(words[i]);
    qsort(wf, wordsSize, sizeof(int), cmp);
    int* res = (int*)malloc(sizeof(int) * queriesSize);
    *returnSize = queriesSize;
    for (int i = 0; i < queriesSize; i++) {
        int fq = f(queries[i]);
        int lo = 0, hi = wordsSize;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (wf[mid] <= fq) lo = mid + 1;
            else hi = mid;
        }
        res[i] = wordsSize - lo;
    }
    free(wf);
    return res;
}
