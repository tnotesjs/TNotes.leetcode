#include <stdlib.h>

// 简化实现：使用排序+查找
typedef struct { int key; int nb[2]; int cnt; } Node1743;

int* restoreArray(int** adjacentPairs, int adjacentPairsSize, int* adjacentPairsColSize, int* returnSize) {
    int n = adjacentPairsSize + 1;
    *returnSize = n;
    // 用哈希表存储邻接关系
    int cap = 1;
    while (cap < n * 4) cap <<= 1;
    Node1743* table = (Node1743*)calloc(cap, sizeof(Node1743));
    int* used = (int*)calloc(cap, sizeof(int));
    for (int i = 0; i < adjacentPairsSize; i++) {
        int u = adjacentPairs[i][0], v = adjacentPairs[i][1];
        unsigned hu = (unsigned)(u * 2654435761U) & (cap - 1);
        while (used[hu] && table[hu].key != u) hu = (hu + 1) & (cap - 1);
        if (!used[hu]) { used[hu] = 1; table[hu].key = u; table[hu].cnt = 0; }
        table[hu].nb[table[hu].cnt++] = v;
        unsigned hv = (unsigned)(v * 2654435761U) & (cap - 1);
        while (used[hv] && table[hv].key != v) hv = (hv + 1) & (cap - 1);
        if (!used[hv]) { used[hv] = 1; table[hv].key = v; table[hv].cnt = 0; }
        table[hv].nb[table[hv].cnt++] = u;
    }
    int start = 0;
    for (int i = 0; i < cap; i++)
        if (used[i] && table[i].cnt == 1) { start = table[i].key; break; }
    int* res = (int*)malloc(n * sizeof(int));
    res[0] = start;
    int prev = -1000000001;
    for (int i = 1; i < n; i++) {
        unsigned h = (unsigned)(res[i-1] * 2654435761U) & (cap - 1);
        while (table[h].key != res[i-1]) h = (h + 1) & (cap - 1);
        for (int j = 0; j < table[h].cnt; j++) {
            if (table[h].nb[j] != prev) { res[i] = table[h].nb[j]; break; }
        }
        prev = res[i-1];
    }
    free(table); free(used);
    return res;
}
