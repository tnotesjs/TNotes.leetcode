int find_2685(int* parent, int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

void unite_2685(int* parent, int* rnk, int x, int y) {
    int px = find_2685(parent, x), py = find_2685(parent, y);
    if (px == py) return;
    if (rnk[px] < rnk[py]) parent[px] = py;
    else if (rnk[px] > rnk[py]) parent[py] = px;
    else { parent[py] = px; rnk[px]++; }
}

int countCompleteComponents(int n, int** edges, int edgesSize, int* edgesColSize) {
    int* parent = (int*)malloc(n * sizeof(int));
    int* rnk = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) parent[i] = i;
    for (int i = 0; i < edgesSize; i++)
        unite_2685(parent, rnk, edges[i][0], edges[i][1]);

    int* vertexCount = (int*)calloc(n, sizeof(int));
    int* edgeCount = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) vertexCount[find_2685(parent, i)]++;
    for (int i = 0; i < edgesSize; i++) edgeCount[find_2685(parent, edges[i][0])]++;

    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (find_2685(parent, i) == i) {
            int v = vertexCount[i], e = edgeCount[i];
            if (e == v * (v - 1) / 2) ans++;
        }
    }
    free(parent); free(rnk); free(vertexCount); free(edgeCount);
    return ans;
}
