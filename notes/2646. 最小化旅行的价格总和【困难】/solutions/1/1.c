int adj[51][51];
int adjSize[51];
int cnt_arr[51];
int price_arr[51];

bool findPath(int u, int parent, int end, int* path, int* pathLen) {
    path[(*pathLen)++] = u;
    if (u == end) return true;
    for (int i = 0; i < adjSize[u]; i++) {
        int v = adj[u][i];
        if (v != parent && findPath(v, u, end, path, pathLen)) return true;
    }
    (*pathLen)--;
    return false;
}

void dp(int u, int parent, int* notHalved, int* halved) {
    *notHalved = price_arr[u] * cnt_arr[u];
    *halved = price_arr[u] * cnt_arr[u] / 2;
    for (int i = 0; i < adjSize[u]; i++) {
        int v = adj[u][i];
        if (v == parent) continue;
        int childNot, childHalf;
        dp(v, u, &childNot, &childHalf);
        *notHalved += (childNot < childHalf ? childNot : childHalf);
        *halved += childNot;
    }
}

int minimumTotalPrice(int n, int** edges, int edgesSize, int* edgesColSize, int* price, int priceSize, int** trips, int tripsSize, int* tripsColSize) {
    memset(adjSize, 0, sizeof(adjSize));
    memset(cnt_arr, 0, sizeof(cnt_arr));
    for (int i = 0; i < n; i++) price_arr[i] = price[i];

    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        adj[u][adjSize[u]++] = v;
        adj[v][adjSize[v]++] = u;
    }

    int path[51];
    for (int i = 0; i < tripsSize; i++) {
        int pathLen = 0;
        findPath(trips[i][0], -1, trips[i][1], path, &pathLen);
        for (int j = 0; j < pathLen; j++) cnt_arr[path[j]]++;
    }

    int notHalved, halved;
    dp(0, -1, &notHalved, &halved);
    return notHalved < halved ? notHalved : halved;
}
