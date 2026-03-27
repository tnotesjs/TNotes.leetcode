int* kmpSearch(char* text, int tLen, char* pat, int pLen, int* cnt) {
    int* lps = (int*)calloc(pLen, sizeof(int));
    for (int i = 1, len = 0; i < pLen; ) {
        if (pat[i] == pat[len]) lps[i++] = ++len;
        else if (len) len = lps[len - 1];
        else i++;
    }
    int* res = (int*)malloc(tLen * sizeof(int));
    *cnt = 0;
    for (int i = 0, j = 0; i < tLen; ) {
        if (text[i] == pat[j]) {
            i++; j++;
            if (j == pLen) { res[(*cnt)++] = i - pLen; j = lps[j - 1]; }
        } else if (j) j = lps[j - 1];
        else i++;
    }
    free(lps);
    return res;
}

int* beautifulIndices(char* s, char* a, char* b, int k, int* returnSize) {
    int n = strlen(s), m1 = strlen(a), m2 = strlen(b);
    int cntA, cntB;
    int* posA = kmpSearch(s, n, a, m1, &cntA);
    int* posB = kmpSearch(s, n, b, m2, &cntB);

    int* res = (int*)malloc(cntA * sizeof(int));
    *returnSize = 0;
    int j = 0;

    for (int i = 0; i < cntA; i++) {
        while (j < cntB && posB[j] < posA[i] - k) j++;
        if (j < cntB && posB[j] <= posA[i] + k) {
            res[(*returnSize)++] = posA[i];
        }
    }

    free(posA);
    free(posB);
    return res;
}
