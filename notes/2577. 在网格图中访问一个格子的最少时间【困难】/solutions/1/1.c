typedef struct { int time; int row; int col; } Node;

void hswap(Node* a, Node* b) { Node t = *a; *a = *b; *b = t; }

void hpush(Node* h, int* sz, Node v) {
    h[(*sz)++] = v;
    int i = *sz - 1;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h[p].time <= h[i].time) break;
        hswap(&h[p], &h[i]);
        i = p;
    }
}

Node hpop(Node* h, int* sz) {
    Node top = h[0];
    h[0] = h[--(*sz)];
    int i = 0;
    while (1) {
        int s = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < *sz && h[l].time < h[s].time) s = l;
        if (r < *sz && h[r].time < h[s].time) s = r;
        if (s == i) break;
        hswap(&h[s], &h[i]);
        i = s;
    }
    return top;
}

int minimumTime(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    if (grid[0][1] > 1 && grid[1][0] > 1) return -1;
    int* dist = (int*)malloc(m * n * sizeof(int));
    for (int i = 0; i < m * n; i++) dist[i] = 0x7fffffff;
    dist[0] = 0;
    Node* heap = (Node*)malloc(m * n * 4 * sizeof(Node));
    int hsz = 0;
    hpush(heap, &hsz, (Node){0, 0, 0});
    int dx[] = {0, 0, 1, -1}, dy[] = {1, -1, 0, 0};
    int ans = -1;
    while (hsz > 0) {
        Node cur = hpop(heap, &hsz);
        if (cur.row == m - 1 && cur.col == n - 1) { ans = cur.time; break; }
        if (cur.time > dist[cur.row * n + cur.col]) continue;
        for (int d = 0; d < 4; d++) {
            int nr = cur.row + dx[d], nc = cur.col + dy[d];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            int w = cur.time + 1;
            if (w < grid[nr][nc]) w = grid[nr][nc];
            if ((w - cur.time) % 2 == 0) w++;
            if (w < dist[nr * n + nc]) {
                dist[nr * n + nc] = w;
                hpush(heap, &hsz, (Node){w, nr, nc});
            }
        }
    }
    free(dist); free(heap);
    return ans;
}
