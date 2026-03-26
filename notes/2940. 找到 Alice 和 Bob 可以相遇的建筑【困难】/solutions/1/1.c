int* leftmostBuildingQueries(int* heights, int heightsSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int n = heightsSize, m = queriesSize;
    *returnSize = m;
    int* ans = (int*)malloc(m * sizeof(int));
    memset(ans, -1, m * sizeof(int));

    int* pendingCnt = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < m; i++) {
        int a = queries[i][0], b = queries[i][1];
        if (a > b) { int t = a; a = b; b = t; }
        if (a == b || heights[a] < heights[b]) {
            ans[i] = b;
        } else {
            pendingCnt[b]++;
        }
    }

    int** pH = (int**)malloc(n * sizeof(int*));
    int** pQ = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        pH[i] = (int*)malloc(pendingCnt[i] * sizeof(int));
        pQ[i] = (int*)malloc(pendingCnt[i] * sizeof(int));
        pendingCnt[i] = 0;
    }
    for (int i = 0; i < m; i++) {
        int a = queries[i][0], b = queries[i][1];
        if (a > b) { int t = a; a = b; b = t; }
        if (a != b && heights[a] >= heights[b]) {
            int idx = pendingCnt[b]++;
            pH[b][idx] = heights[a];
            pQ[b][idx] = i;
        }
    }

    int* sH = (int*)malloc(n * sizeof(int));
    int* sI = (int*)malloc(n * sizeof(int));
    int top = 0;

    for (int i = n - 1; i >= 0; i--) {
        for (int j = 0; j < pendingCnt[i]; j++) {
            int h = pH[i][j], qi = pQ[i][j];
            int lo = 0, hi = top - 1, res = -1;
            while (lo <= hi) {
                int mid = (lo + hi) / 2;
                if (sH[mid] > h) { res = sI[mid]; lo = mid + 1; }
                else hi = mid - 1;
            }
            ans[qi] = res;
        }
        while (top > 0 && sH[top - 1] <= heights[i]) top--;
        sH[top] = heights[i];
        sI[top] = i;
        top++;
    }

    for (int i = 0; i < n; i++) { free(pH[i]); free(pQ[i]); }
    free(pH); free(pQ); free(pendingCnt); free(sH); free(sI);
    return ans;
}
