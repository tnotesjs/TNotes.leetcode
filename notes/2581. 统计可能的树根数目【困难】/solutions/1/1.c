#define HSIZE 262144
#define HMASK (HSIZE - 1)

typedef struct HNode { long long key; struct HNode* next; } HNode;
HNode* htable[HSIZE];

void hinit() { memset(htable, 0, sizeof(htable)); }

unsigned hfn(long long key) { return (unsigned)(key ^ (key >> 17)) & HMASK; }

void hins(long long key) {
    unsigned h = hfn(key);
    HNode* n = (HNode*)malloc(sizeof(HNode));
    n->key = key; n->next = htable[h]; htable[h] = n;
}

int hhas(long long key) {
    for (HNode* n = htable[hfn(key)]; n; n = n->next)
        if (n->key == key) return 1;
    return 0;
}

void hfree() {
    for (int i = 0; i < HSIZE; i++) {
        HNode* n = htable[i];
        while (n) { HNode* t = n->next; free(n); n = t; }
        htable[i] = NULL;
    }
}

int rootCount(int** edges, int edgesSize, int* edgesColSize, int** guesses, int guessesSize, int* guessesColSize, int k) {
    int n = edgesSize + 1;
    int* head = (int*)malloc(n * sizeof(int));
    int* to = (int*)malloc(2 * edgesSize * sizeof(int));
    int* nxt = (int*)malloc(2 * edgesSize * sizeof(int));
    memset(head, -1, n * sizeof(int));
    int ei = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        to[ei] = v; nxt[ei] = head[u]; head[u] = ei++;
        to[ei] = u; nxt[ei] = head[v]; head[v] = ei++;
    }
    hinit();
    for (int i = 0; i < guessesSize; i++)
        hins((long long)guesses[i][0] * 100001 + guesses[i][1]);
    int* par = (int*)malloc(n * sizeof(int));
    int* order = (int*)malloc(n * sizeof(int));
    int* vis = (int*)calloc(n, sizeof(int));
    int front = 0, back = 0;
    order[back++] = 0; vis[0] = 1; par[0] = -1;
    int cnt = 0;
    while (front < back) {
        int u = order[front++];
        for (int e = head[u]; e != -1; e = nxt[e]) {
            int v = to[e];
            if (!vis[v]) {
                vis[v] = 1; par[v] = u; order[back++] = v;
                if (hhas((long long)u * 100001 + v)) cnt++;
            }
        }
    }
    int* cnts = (int*)malloc(n * sizeof(int));
    cnts[0] = cnt;
    int ans = cnt >= k ? 1 : 0;
    for (int i = 1; i < n; i++) {
        int u = order[i], p = par[u];
        int c = cnts[p];
        if (hhas((long long)p * 100001 + u)) c--;
        if (hhas((long long)u * 100001 + p)) c++;
        cnts[u] = c;
        if (c >= k) ans++;
    }
    hfree();
    free(head); free(to); free(nxt); free(par); free(order); free(vis); free(cnts);
    return ans;
}
