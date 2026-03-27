int* kmpSearch(char* text, int tn, char* pat, int pn, int* cnt) {
    int* fail = calloc(pn, sizeof(int));
    for (int i = 1; i < pn; i++) {
        int j = fail[i - 1];
        while (j > 0 && pat[j] != pat[i]) j = fail[j - 1];
        if (pat[j] == pat[i]) j++;
        fail[i] = j;
    }
    int* pos = malloc(tn * sizeof(int));
    *cnt = 0;
    int j = 0;
    for (int i = 0; i < tn; i++) {
        while (j > 0 && text[i] != pat[j]) j = fail[j - 1];
        if (text[i] == pat[j]) j++;
        if (j == pn) {
            pos[(*cnt)++] = i - pn + 1;
            j = fail[j - 1];
        }
    }
    free(fail);
    return pos;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* beautifulIndices(char* s, char* a, char* b, int k, int* returnSize) {
    int n = strlen(s), la = strlen(a), lb = strlen(b);
    int cntA, cntB;
    int* posA = kmpSearch(s, n, a, la, &cntA);
    int* posB = kmpSearch(s, n, b, lb, &cntB);

    int* res = malloc((cntA > 0 ? cntA : 1) * sizeof(int));
    int cnt = 0;
    for (int idx = 0; idx < cntA; idx++) {
        int i = posA[idx];
        int lo = 0, hi = cntB - 1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (posB[mid] < i - k) lo = mid + 1;
            else hi = mid - 1;
        }
        if (lo < cntB && posB[lo] <= i + k)
            res[cnt++] = i;
    }
    free(posA);
    free(posB);
    *returnSize = cnt;
    return res;
}
