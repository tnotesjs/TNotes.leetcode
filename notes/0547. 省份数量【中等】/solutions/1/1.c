int parent[201];
int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    int n = isConnectedSize;
    for (int i = 0; i < n; i++) parent[i] = i;
    int count = n;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (isConnected[i][j]) {
                int ri = find(i), rj = find(j);
                if (ri != rj) {
                    parent[ri] = rj;
                    count--;
                }
            }
        }
    }
    return count;
}
