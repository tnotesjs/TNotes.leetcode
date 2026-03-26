int parent2316[100001];
int size2316[100001];

int find2316(int x) {
    while (parent2316[x] != x) {
        parent2316[x] = parent2316[parent2316[x]];
        x = parent2316[x];
    }
    return x;
}

long long countPairs(int n, int** edges, int edgesSize, int* edgesColSize) {
    for (int i = 0; i < n; i++) { parent2316[i] = i; size2316[i] = 1; }
    for (int i = 0; i < edgesSize; i++) {
        int ra = find2316(edges[i][0]), rb = find2316(edges[i][1]);
        if (ra != rb) {
            if (size2316[ra] < size2316[rb]) {
                parent2316[ra] = rb;
                size2316[rb] += size2316[ra];
            } else {
                parent2316[rb] = ra;
                size2316[ra] += size2316[rb];
            }
        }
    }
    long long res = 0, visited = 0;
    for (int i = 0; i < n; i++) {
        if (parent2316[i] == i) {
            res += visited * size2316[i];
            visited += size2316[i];
        }
    }
    return res;
}
