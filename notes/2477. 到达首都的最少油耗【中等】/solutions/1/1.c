int *adj2477, *adjHead2477, *adjNext2477;
int adjIdx2477;
long long fuel2477;
int seats2477;

void addEdge2477(int u, int v) {
    adj2477[adjIdx2477] = v;
    adjNext2477[adjIdx2477] = adjHead2477[u];
    adjHead2477[u] = adjIdx2477++;
}

long long dfs2477(int u, int parent) {
    long long people = 1;
    for (int i = adjHead2477[u]; i != -1; i = adjNext2477[i]) {
        int v = adj2477[i];
        if (v != parent) {
            people += dfs2477(v, u);
        }
    }
    if (u != 0) {
        fuel2477 += (people + seats2477 - 1) / seats2477;
    }
    return people;
}

long long minimumFuelCost(int** roads, int roadsSize, int* roadsColSize, int seats) {
    int n = roadsSize + 1;
    adj2477 = (int *)malloc(2 * n * sizeof(int));
    adjHead2477 = (int *)malloc(n * sizeof(int));
    adjNext2477 = (int *)malloc(2 * n * sizeof(int));
    memset(adjHead2477, -1, n * sizeof(int));
    adjIdx2477 = 0;
    for (int i = 0; i < roadsSize; i++) {
        addEdge2477(roads[i][0], roads[i][1]);
        addEdge2477(roads[i][1], roads[i][0]);
    }
    fuel2477 = 0;
    seats2477 = seats;
    dfs2477(0, -1);
    free(adj2477); free(adjHead2477); free(adjNext2477);
    return fuel2477;
}
