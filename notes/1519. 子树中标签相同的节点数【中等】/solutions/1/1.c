typedef struct { int* data; int size; int cap; } IntList;

void addChild(IntList* adj, int u, int v) {
    if (adj[u].size == adj[u].cap) {
        adj[u].cap = adj[u].cap ? adj[u].cap * 2 : 4;
        adj[u].data = (int*)realloc(adj[u].data, adj[u].cap * sizeof(int));
    }
    adj[u].data[adj[u].size++] = v;
}

int* resArr;
IntList* adjList;
const char* labelsG;

void dfs(int node, int parent, int* cnt) {
    memset(cnt, 0, 26 * sizeof(int));
    cnt[labelsG[node] - 'a'] = 1;
    int childCnt[26];
    for (int i = 0; i < adjList[node].size; i++) {
        int child = adjList[node].data[i];
        if (child == parent) continue;
        dfs(child, node, childCnt);
        for (int j = 0; j < 26; j++) cnt[j] += childCnt[j];
    }
    resArr[node] = cnt[labelsG[node] - 'a'];
}

int* countSubTrees(int n, int** edges, int edgesSize, int* edgesColSize,
                   char* labels, int* returnSize) {
    adjList = (IntList*)calloc(n, sizeof(IntList));
    for (int i = 0; i < edgesSize; i++) {
        addChild(adjList, edges[i][0], edges[i][1]);
        addChild(adjList, edges[i][1], edges[i][0]);
    }
    resArr = (int*)malloc(n * sizeof(int));
    labelsG = labels;
    int cnt[26];
    dfs(0, -1, cnt);
    for (int i = 0; i < n; i++) free(adjList[i].data);
    free(adjList);
    *returnSize = n;
    return resArr;
}
