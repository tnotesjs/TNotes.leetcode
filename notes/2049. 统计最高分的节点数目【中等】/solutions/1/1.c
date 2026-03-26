int countHighestScoreNodes(int* parents, int parentsSize) {
    int n = parentsSize;
    int* childCnt = (int*)calloc(n, sizeof(int));
    for (int i = 1; i < n; i++) childCnt[parents[i]]++;
    int** children = (int**)malloc(n * sizeof(int*));
    int* idx = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) children[i] = (int*)malloc((childCnt[i] + 1) * sizeof(int));
    for (int i = 1; i < n; i++) {
        int p = parents[i];
        children[p][idx[p]++] = i;
    }
    int* sz = (int*)calloc(n, sizeof(int));
    int* stack = (int*)malloc(n * sizeof(int));
    int* order = (int*)malloc(n * sizeof(int));
    int top = 0, oidx = 0;
    stack[top++] = 0;
    while (top > 0) {
        int u = stack[--top];
        order[oidx++] = u;
        for (int j = 0; j < childCnt[u]; j++) stack[top++] = children[u][j];
    }
    for (int i = oidx - 1; i >= 0; i--) {
        int u = order[i];
        sz[u] = 1;
        for (int j = 0; j < childCnt[u]; j++) sz[u] += sz[children[u][j]];
    }
    long long maxScore = 0;
    int count = 0;
    for (int i = 0; i < n; i++) {
        long long score = 1;
        int rem = n - 1;
        for (int j = 0; j < childCnt[i]; j++) {
            score *= sz[children[i][j]];
            rem -= sz[children[i][j]];
        }
        if (rem > 0) score *= rem;
        if (score > maxScore) { maxScore = score; count = 1; }
        else if (score == maxScore) count++;
    }
    for (int i = 0; i < n; i++) free(children[i]);
    free(children); free(childCnt); free(idx); free(sz); free(stack); free(order);
    return count;
}
