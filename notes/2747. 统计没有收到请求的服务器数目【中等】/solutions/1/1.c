int cmpLogs(const void *a, const void *b) {
    return ((int *)a)[1] - ((int *)b)[1];
}

int cmpIdx(const void *a, const void *b) {
    // 比较时需要外部 queries 数组，用全局变量
    extern int *g_queries;
    return g_queries[*(int *)a] - g_queries[*(int *)b];
}

int *g_queries;

int *countServers(int n, int **logs, int logsSize, int *logsColSize, int x, int *queries, int queriesSize, int *returnSize) {
    *returnSize = queriesSize;
    // 排序 logs
    qsort(logs, logsSize, sizeof(int *), cmpLogs);
    // 排序 queries 的下标
    int *idx = (int *)malloc(queriesSize * sizeof(int));
    for (int i = 0; i < queriesSize; i++) idx[i] = i;
    g_queries = queries;
    qsort(idx, queriesSize, sizeof(int), cmpIdx);
    int *res = (int *)calloc(queriesSize, sizeof(int));
    int *cnt = (int *)calloc(n + 1, sizeof(int));
    int active = 0, left = 0, right = 0;
    for (int qi = 0; qi < queriesSize; qi++) {
        int i = idx[qi];
        int qr = queries[i];
        int ql = qr - x;
        while (right < logsSize && logs[right][1] <= qr) {
            int sid = logs[right][0];
            if (cnt[sid]++ == 0) active++;
            right++;
        }
        while (left < logsSize && logs[left][1] < ql) {
            int sid = logs[left][0];
            if (--cnt[sid] == 0) active--;
            left++;
        }
        res[i] = n - active;
    }
    free(idx);
    free(cnt);
    return res;
}
