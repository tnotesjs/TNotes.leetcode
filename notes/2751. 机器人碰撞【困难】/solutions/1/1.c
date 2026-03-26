int cmpPos(const void *a, const void *b) {
    extern int *g_pos;
    return g_pos[*(int *)a] - g_pos[*(int *)b];
}

int *g_pos;

int *survivedRobotsHealths(int *positions, int positionsSize, int *healths, int healthsSize, char *directions, int *returnSize) {
    int n = positionsSize;
    int *idx = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) idx[i] = i;
    g_pos = positions;
    qsort(idx, n, sizeof(int), cmpPos);
    int *stack = (int *)malloc(n * sizeof(int));
    int top = 0;
    for (int k = 0; k < n; k++) {
        int i = idx[k];
        if (directions[i] == 'R') {
            stack[top++] = i;
            continue;
        }
        while (top > 0 && healths[i] > 0) {
            int t = stack[top - 1];
            if (healths[t] < healths[i]) {
                top--;
                healths[t] = 0;
                healths[i]--;
            } else if (healths[t] > healths[i]) {
                healths[t]--;
                healths[i] = 0;
            } else {
                top--;
                healths[t] = 0;
                healths[i] = 0;
            }
        }
    }
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (healths[i] > 0) cnt++;
    }
    int *res = (int *)malloc(cnt * sizeof(int));
    int ri = 0;
    for (int i = 0; i < n; i++) {
        if (healths[i] > 0) res[ri++] = healths[i];
    }
    *returnSize = cnt;
    free(idx);
    free(stack);
    return res;
}
