typedef struct { int val, r, c; } HeapNode;

void heapSwap(HeapNode *h, int i, int j) {
    HeapNode t = h[i]; h[i] = h[j]; h[j] = t;
}

void heapPush(HeapNode *h, int *size, int val, int r, int c) {
    int i = (*size)++;
    h[i] = (HeapNode){val, r, c};
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h[p].val <= h[i].val) break;
        heapSwap(h, i, p);
        i = p;
    }
}

HeapNode heapPop(HeapNode *h, int *size) {
    HeapNode top = h[0];
    h[0] = h[--(*size)];
    int i = 0;
    while (1) {
        int s = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < *size && h[l].val < h[s].val) s = l;
        if (r < *size && h[r].val < h[s].val) s = r;
        if (s == i) break;
        heapSwap(h, i, s);
        i = s;
    }
    return top;
}

int cmpPair(const void *a, const void *b) {
    return ((int *)a)[0] - ((int *)b)[0];
}

int* maxPoints(int** grid, int gridSize, int* gridColSize, int* queries, int queriesSize, int* returnSize) {
    int m = gridSize, n = gridColSize[0];
    int (*pairs)[2] = malloc(sizeof(int[2]) * queriesSize);
    for (int i = 0; i < queriesSize; i++) { pairs[i][0] = queries[i]; pairs[i][1] = i; }
    qsort(pairs, queriesSize, sizeof(int[2]), cmpPair);

    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    int *visited = (int *)calloc(m * n, sizeof(int));
    HeapNode *heap = (HeapNode *)malloc(sizeof(HeapNode) * m * n);
    int heapSize = 0;
    heapPush(heap, &heapSize, grid[0][0], 0, 0);
    visited[0] = 1;
    int count = 0;
    int *ans = (int *)malloc(sizeof(int) * queriesSize);

    for (int qi = 0; qi < queriesSize; qi++) {
        int q = pairs[qi][0];
        while (heapSize > 0 && heap[0].val < q) {
            HeapNode nd = heapPop(heap, &heapSize);
            count++;
            for (int d = 0; d < 4; d++) {
                int nr = nd.r + dirs[d][0], nc = nd.c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr * n + nc]) {
                    visited[nr * n + nc] = 1;
                    heapPush(heap, &heapSize, grid[nr][nc], nr, nc);
                }
            }
        }
        ans[pairs[qi][1]] = count;
    }

    free(pairs); free(visited); free(heap);
    *returnSize = queriesSize;
    return ans;
}
