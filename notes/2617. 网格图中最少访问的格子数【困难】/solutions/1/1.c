typedef struct { int dist; int reach; } HeapNode;
typedef struct { HeapNode *data; int size; int cap; } MinHeap;

MinHeap *createHeap(int cap) {
    MinHeap *h = malloc(sizeof(MinHeap));
    h->data = malloc(cap * sizeof(HeapNode));
    h->size = 0; h->cap = cap;
    return h;
}

void heapPush(MinHeap *h, int dist, int reach) {
    if (h->size == h->cap) { h->cap *= 2; h->data = realloc(h->data, h->cap * sizeof(HeapNode)); }
    h->data[h->size] = (HeapNode){dist, reach};
    int i = h->size++;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h->data[p].dist <= h->data[i].dist) break;
        HeapNode tmp = h->data[p]; h->data[p] = h->data[i]; h->data[i] = tmp;
        i = p;
    }
}

void heapPop(MinHeap *h) {
    h->data[0] = h->data[--h->size];
    int i = 0;
    while (1) {
        int s = i, l = 2*i+1, r = 2*i+2;
        if (l < h->size && h->data[l].dist < h->data[s].dist) s = l;
        if (r < h->size && h->data[r].dist < h->data[s].dist) s = r;
        if (s == i) break;
        HeapNode tmp = h->data[s]; h->data[s] = h->data[i]; h->data[i] = tmp;
        i = s;
    }
}

int minimumVisitedCells(int **grid, int gridSize, int *gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int **dist = malloc(m * sizeof(int *));
    for (int i = 0; i < m; i++) { dist[i] = malloc(n * sizeof(int)); for (int j = 0; j < n; j++) dist[i][j] = -1; }
    dist[0][0] = 1;
    MinHeap **rowH = malloc(m * sizeof(MinHeap *));
    MinHeap **colH = malloc(n * sizeof(MinHeap *));
    for (int i = 0; i < m; i++) rowH[i] = createHeap(16);
    for (int j = 0; j < n; j++) colH[j] = createHeap(16);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            while (rowH[i]->size && rowH[i]->data[0].reach < j) heapPop(rowH[i]);
            if (rowH[i]->size && (dist[i][j] == -1 || rowH[i]->data[0].dist + 1 < dist[i][j]))
                dist[i][j] = rowH[i]->data[0].dist + 1;
            while (colH[j]->size && colH[j]->data[0].reach < i) heapPop(colH[j]);
            if (colH[j]->size && (dist[i][j] == -1 || colH[j]->data[0].dist + 1 < dist[i][j]))
                dist[i][j] = colH[j]->data[0].dist + 1;
            if (dist[i][j] != -1) {
                heapPush(rowH[i], dist[i][j], j + grid[i][j]);
                heapPush(colH[j], dist[i][j], i + grid[i][j]);
            }
        }
    }
    int ans = dist[m-1][n-1];
    for (int i = 0; i < m; i++) { free(dist[i]); free(rowH[i]->data); free(rowH[i]); }
    for (int j = 0; j < n; j++) { free(colH[j]->data); free(colH[j]); }
    free(dist); free(rowH); free(colH);
    return ans;
}
