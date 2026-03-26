long long* kthPalindrome(int* queries, int queriesSize, int intLength, int* returnSize) {
    int half = (intLength + 1) / 2;
    long long start = 1;
    for (int i = 0; i < half - 1; i++) start *= 10;
    long long limit = start * 10 - start;

    *returnSize = queriesSize;
    long long *res = (long long *)malloc(queriesSize * sizeof(long long));
    for (int i = 0; i < queriesSize; i++) {
        if (queries[i] > limit) {
            res[i] = -1;
            continue;
        }
        long long num = start + queries[i] - 1;
        char s[20];
        sprintf(s, "%lld", num);
        char pal[40];
        int len = 0;
        for (int j = 0; j < half; j++) pal[len++] = s[j];
        int from = intLength % 2 == 0 ? half - 1 : half - 2;
        for (int j = from; j >= 0; j--) pal[len++] = s[j];
        pal[len] = '\0';
        long long val = 0;
        for (int j = 0; j < len; j++) val = val * 10 + (pal[j] - '0');
        res[i] = val;
    }
    return res;
}
