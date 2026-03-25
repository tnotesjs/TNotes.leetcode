#include <stdlib.h>

static int par1722[100001];
int find1722(int x) { while (par1722[x] != x) { par1722[x] = par1722[par1722[x]]; x = par1722[x]; } return x; }

int minimumHammingDistance(int* source, int sourceSize, int* target, int targetSize, int** allowedSwaps, int allowedSwapsSize, int* allowedSwapsColSize) {
    int n = sourceSize;
    for (int i = 0; i < n; i++) par1722[i] = i;
    for (int i = 0; i < allowedSwapsSize; i++) {
        int a = find1722(allowedSwaps[i][0]), b = find1722(allowedSwaps[i][1]);
        if (a != b) par1722[a] = b;
    }
    // 简化：按组统计
    int** groups = (int**)calloc(n, sizeof(int*));
    int* gsz = (int*)calloc(n, sizeof(int));
    int* gcap = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) {
        int p = find1722(i);
        if (gcap[p] == 0) { gcap[p] = 8; groups[p] = (int*)malloc(8 * sizeof(int)); }
        if (gsz[p] == gcap[p]) { gcap[p] *= 2; groups[p] = (int*)realloc(groups[p], gcap[p] * sizeof(int)); }
        groups[p][gsz[p]++] = i;
    }
    int res = 0;
    int* cnt = (int*)calloc(100001, sizeof(int));
    for (int p = 0; p < n; p++) {
        if (gsz[p] == 0) continue;
        for (int j = 0; j < gsz[p]; j++) cnt[source[groups[p][j]]]++;
        for (int j = 0; j < gsz[p]; j++) {
            if (cnt[target[groups[p][j]]] > 0) cnt[target[groups[p][j]]]--;
            else res++;
        }
        for (int j = 0; j < gsz[p]; j++) cnt[source[groups[p][j]]] = 0;
        free(groups[p]);
    }
    free(groups); free(gsz); free(gcap); free(cnt);
    return res;
}
