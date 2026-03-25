int parent[100001];

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int makeConnected(int n, int** connections, int connectionsSize, int* connectionsColSize) {
    if (connectionsSize < n - 1) return -1;
    for (int i = 0; i < n; i++) parent[i] = i;
    int components = n;
    for (int i = 0; i < connectionsSize; i++) {
        int ra = find(connections[i][0]), rb = find(connections[i][1]);
        if (ra != rb) {
            parent[ra] = rb;
            components--;
        }
    }
    return components - 1;
}
