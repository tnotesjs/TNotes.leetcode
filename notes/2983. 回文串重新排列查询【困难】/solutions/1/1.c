/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool* canMakePalindromeQueries(char* s, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int n = strlen(s), m = n / 2;
    int (*pre1)[26] = calloc(m + 1, sizeof(int[26]));
    int (*pre2)[26] = calloc(m + 1, sizeof(int[26]));
    int *mis = calloc(m + 1, sizeof(int));

    for (int i = 0; i < m; i++) {
        int c1 = s[i] - 'a', c2 = s[n - 1 - i] - 'a';
        for (int ch = 0; ch < 26; ch++) {
            pre1[i + 1][ch] = pre1[i][ch] + (ch == c1);
            pre2[i + 1][ch] = pre2[i][ch] + (ch == c2);
        }
        mis[i + 1] = mis[i] + (c1 != c2);
    }

    *returnSize = queriesSize;
    bool *res = malloc(queriesSize * sizeof(bool));

    for (int q = 0; q < queriesSize; q++) {
        int a = queries[q][0], b = queries[q][1];
        int c = queries[q][2], d = queries[q][3];
        int L = n - 1 - d, R = n - 1 - c;
        int left = a < L ? a : L, right = b > R ? b : R;
        int ok = 1;

        int misLeft = left > 0 ? mis[left] - mis[0] : 0;
        int misRight = right + 1 < m ? mis[m] - mis[right + 1] : 0;
        if (misLeft > 0 || misRight > 0) { ok = 0; }

        if (ok && b < L) {
            if (mis[L] - mis[b + 1] > 0) ok = 0;
        }
        if (ok && R < a) {
            if (mis[a] - mis[R + 1] > 0) ok = 0;
        }

        if (ok) {
            int ol = a > L ? a : L;
            int or_ = b < R ? b : R;
            for (int ch = 0; ch < 26 && ok; ch++) {
                int h1p = pre1[b + 1][ch] - pre1[a][ch];
                int h2p = pre2[R + 1][ch] - pre2[L][ch];
                int need1, need2;
                if (ol > or_) {
                    need1 = pre2[b + 1][ch] - pre2[a][ch];
                    need2 = pre1[R + 1][ch] - pre1[L][ch];
                } else {
                    need1 = (a < ol ? pre2[ol][ch] - pre2[a][ch] : 0)
                          + (or_ < b ? pre2[b + 1][ch] - pre2[or_ + 1][ch] : 0);
                    need2 = (L < ol ? pre1[ol][ch] - pre1[L][ch] : 0)
                          + (or_ < R ? pre1[R + 1][ch] - pre1[or_ + 1][ch] : 0);
                }
                if (h1p < need1 || h2p < need2 || h1p - need1 != h2p - need2) ok = 0;
            }
        }
        res[q] = ok;
    }
    free(pre1); free(pre2); free(mis);
    return res;
}
