int parent[1001];
int rnk[1001];

int find(int x) {
    while (parent[x] != x) x = parent[x] = parent[parent[x]];
    return x;
}

int* findRedundantConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    for (int i = 0; i <= edgesSize; i++) { parent[i] = i; rnk[i] = 0; }
    *returnSize = 2;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        int pu = find(u), pv = find(v);
        if (pu == pv) {
            int* res = (int*)malloc(sizeof(int) * 2);
            res[0] = u; res[1] = v;
            return res;
        }
        if (rnk[pu] < rnk[pv]) parent[pu] = pv;
        else if (rnk[pu] > rnk[pv]) parent[pv] = pu;
        else { parent[pv] = pu; rnk[pu]++; }
    }
    *returnSize = 0;
    return NULL;
}
