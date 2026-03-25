int parent[20002];

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

int removeStones(int** stones, int stonesSize, int* stonesColSize) {
    for (int i = 0; i < 20002; i++) parent[i] = i;

    for (int i = 0; i < stonesSize; i++) {
        parent[find(stones[i][0])] = find(stones[i][1] + 10001);
    }

    int* seen = calloc(20002, sizeof(int));
    int components = 0;
    for (int i = 0; i < stonesSize; i++) {
        int root = find(stones[i][0]);
        if (!seen[root]) { seen[root] = 1; components++; }
    }
    free(seen);

    return stonesSize - components;
}
