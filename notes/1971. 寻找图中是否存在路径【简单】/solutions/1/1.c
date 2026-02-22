int parent[200001];

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

void unite(int a, int b) {
    int pa = find(a), pb = find(b);
    if (pa != pb) parent[pa] = pb;
}

bool validPath(int n, int** edges, int edgesSize, int* edgesColSize, int source, int destination) {
    if (source == destination) return true;
    for (int i = 0; i < n; i++) parent[i] = i;
    for (int i = 0; i < edgesSize; i++) {
        unite(edges[i][0], edges[i][1]);
    }
    return find(source) == find(destination);
}
