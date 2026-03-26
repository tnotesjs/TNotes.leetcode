int *nxtArr;

int find(int x) {
    if (nxtArr[x] == x) return x;
    return nxtArr[x] = find(nxtArr[x]);
}

void removePos(int x) {
    nxtArr[x] = x + 2;
}

int *minReverseOperations(int n, int p, int *banned, int bannedSize, int k, int *returnSize) {
    int *ans = malloc(n * sizeof(int));
    memset(ans, -1, n * sizeof(int));
    ans[p] = 0;
    *returnSize = n;

    nxtArr = malloc((n + 2) * sizeof(int));
    for (int i = 0; i < n + 2; i++) nxtArr[i] = i;

    for (int i = 0; i < bannedSize; i++) removePos(banned[i]);
    removePos(p);

    int *queue = malloc(n * sizeof(int));
    int *next = malloc(n * sizeof(int));
    int qSize = 0, nSize = 0;
    queue[qSize++] = p;

    while (qSize > 0) {
        nSize = 0;
        for (int q = 0; q < qSize; q++) {
            int i = queue[q];
            int lo = i - k + 1 > k - 1 - i ? i - k + 1 : k - 1 - i;
            int hi = i + k - 1 < 2 * n - k - 1 - i ? i + k - 1 : 2 * n - k - 1 - i;
            int j = find(lo);
            while (j <= hi) {
                ans[j] = ans[i] + 1;
                removePos(j);
                next[nSize++] = j;
                j = find(j);
            }
        }
        int *tmp = queue; queue = next; next = tmp;
        qSize = nSize;
    }

    free(queue); free(next); free(nxtArr);
    return ans;
}
