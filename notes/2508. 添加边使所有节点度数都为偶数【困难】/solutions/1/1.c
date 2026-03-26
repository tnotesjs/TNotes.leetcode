typedef struct { long long key; int used; } Entry;
typedef struct { Entry *t; int cap; } HSet;

HSet* hsCreate(int cap) {
    HSet *h = (HSet *)malloc(sizeof(HSet));
    h->cap = cap;
    h->t = (Entry *)calloc(cap, sizeof(Entry));
    return h;
}

void hsInsert(HSet *h, long long key) {
    int idx = (int)((unsigned long long)(key * 2654435761ULL) % h->cap);
    while (h->t[idx].used && h->t[idx].key != key)
        idx = (idx + 1) % h->cap;
    h->t[idx].key = key;
    h->t[idx].used = 1;
}

int hsContains(HSet *h, long long key) {
    int idx = (int)((unsigned long long)(key * 2654435761ULL) % h->cap);
    while (h->t[idx].used) {
        if (h->t[idx].key == key) return 1;
        idx = (idx + 1) % h->cap;
    }
    return 0;
}

bool isPossible(int n, int** edges, int edgesSize, int* edgesColSize) {
    int *degree = (int *)calloc(n + 1, sizeof(int));
    int cap = edgesSize * 6 + 7;
    HSet *es = hsCreate(cap);
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        degree[u]++; degree[v]++;
        hsInsert(es, (long long)u * (n + 1) + v);
        hsInsert(es, (long long)v * (n + 1) + u);
    }
    int odd[4], oc = 0;
    for (int i = 1; i <= n; i++)
        if (degree[i] % 2 == 1) { if (oc < 4) odd[oc] = i; oc++; }

    int res = 0;
    if (oc == 0) { res = 1; }
    else if (oc == 2) {
        int a = odd[0], b = odd[1];
        if (!hsContains(es, (long long)a * (n + 1) + b)) { res = 1; }
        else {
            for (int c = 1; c <= n && !res; c++)
                if (c != a && c != b &&
                    !hsContains(es, (long long)c * (n + 1) + a) &&
                    !hsContains(es, (long long)c * (n + 1) + b)) res = 1;
        }
    } else if (oc == 4) {
        int a = odd[0], b = odd[1], c = odd[2], d = odd[3];
        if (!hsContains(es, (long long)a*(n+1)+b) && !hsContains(es, (long long)c*(n+1)+d)) res = 1;
        if (!res && !hsContains(es, (long long)a*(n+1)+c) && !hsContains(es, (long long)b*(n+1)+d)) res = 1;
        if (!res && !hsContains(es, (long long)a*(n+1)+d) && !hsContains(es, (long long)b*(n+1)+c)) res = 1;
    }
    free(degree); free(es->t); free(es);
    return res;
}
