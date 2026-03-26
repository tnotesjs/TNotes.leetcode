int hamming(char* a, char* b) {
    int la = strlen(a), lb = strlen(b);
    if (la != lb) return -1;
    int d = 0;
    for (int i = 0; i < la; i++) {
        if (a[i] != b[i]) d++;
        if (d > 1) return d;
    }
    return d;
}

char** getWordsInLongestSubsequence(int n, char** words, int wordsSize, int* groups, int groupsSize, int* returnSize) {
    int* dp = (int*)malloc(n * sizeof(int));
    int* prev = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) { dp[i] = 1; prev[i] = -1; }

    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (groups[i] != groups[j] && hamming(words[i], words[j]) == 1) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }
        }
    }

    int maxIdx = 0;
    for (int i = 1; i < n; i++) {
        if (dp[i] > dp[maxIdx]) maxIdx = i;
    }

    *returnSize = dp[maxIdx];
    char** res = (char**)malloc(*returnSize * sizeof(char*));
    int idx = *returnSize - 1;
    for (int i = maxIdx; i != -1; i = prev[i]) {
        res[idx--] = words[i];
    }

    free(dp);
    free(prev);
    return res;
}
