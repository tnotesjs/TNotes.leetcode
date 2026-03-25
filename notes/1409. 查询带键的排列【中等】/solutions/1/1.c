int* processQueries(int* queries, int queriesSize, int m, int* returnSize) {
    int* P = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) P[i] = i + 1;
    int* res = (int*)malloc(queriesSize * sizeof(int));
    *returnSize = queriesSize;
    for (int i = 0; i < queriesSize; i++) {
        int idx = 0;
        while (P[idx] != queries[i]) idx++;
        res[i] = idx;
        int val = P[idx];
        for (int j = idx; j > 0; j--) P[j] = P[j - 1];
        P[0] = val;
    }
    free(P);
    return res;
}
