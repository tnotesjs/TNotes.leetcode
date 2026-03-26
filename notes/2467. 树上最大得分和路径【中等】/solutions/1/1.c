int *adj2467, *adjHead2467, *adjNext2467;
int adjIdx2467;

void addEdge2467(int u, int v) {
    adj2467[adjIdx2467] = v;
    adjNext2467[adjIdx2467] = adjHead2467[u];
    adjHead2467[u] = adjIdx2467++;
}

int *bobTime2467, *parent2467, *amount2467;
int ans2467;

void dfs2467(int u, int par, int time, int score) {
    if (time < bobTime2467[u]) score += amount2467[u];
    else if (time == bobTime2467[u]) score += amount2467[u] / 2;

    int isLeaf = 1;
    for (int i = adjHead2467[u]; i != -1; i = adjNext2467[i]) {
        int v = adj2467[i];
        if (v != par) {
            isLeaf = 0;
            dfs2467(v, u, time + 1, score);
        }
    }
    if (isLeaf && score > ans2467) ans2467 = score;
}

int mostProfitablePath(int** edges, int edgesSize, int* edgesColSize, int bob, int* amount, int amountSize) {
    int n = amountSize;
    adj2467 = (int *)malloc(2 * n * sizeof(int));
    adjHead2467 = (int *)malloc(n * sizeof(int));
    adjNext2467 = (int *)malloc(2 * n * sizeof(int));
    memset(adjHead2467, -1, n * sizeof(int));
    adjIdx2467 = 0;
    for (int i = 0; i < edgesSize; i++) {
        addEdge2467(edges[i][0], edges[i][1]);
        addEdge2467(edges[i][1], edges[i][0]);
    }

    parent2467 = (int *)malloc(n * sizeof(int));
    memset(parent2467, -1, n * sizeof(int));
    int *queue = (int *)malloc(n * sizeof(int));
    int *visited = (int *)calloc(n, sizeof(int));
    queue[0] = 0; visited[0] = 1;
    int head = 0, tail = 1;
    while (head < tail) {
        int u = queue[head++];
        for (int i = adjHead2467[u]; i != -1; i = adjNext2467[i]) {
            int v = adj2467[i];
            if (!visited[v]) {
                visited[v] = 1;
                parent2467[v] = u;
                queue[tail++] = v;
            }
        }
    }

    bobTime2467 = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) bobTime2467[i] = 2147483647;
    int cur = bob, t = 0;
    while (cur != -1) {
        bobTime2467[cur] = t++;
        cur = parent2467[cur];
    }

    amount2467 = amount;
    ans2467 = -2147483647;
    dfs2467(0, -1, 0, 0);

    free(adj2467); free(adjHead2467); free(adjNext2467);
    free(parent2467); free(queue); free(visited); free(bobTime2467);
    return ans2467;
}
