typedef struct { int key; int val; UT_hash_handle hh; } HM2561;

int cmp2561(const void* a, const void* b) { return *(int*)a - *(int*)b; }

long long minCost(int* basket1, int basket1Size, int* basket2, int basket2Size) {
    HM2561* map = NULL;
    for (int i = 0; i < basket1Size; i++) {
        HM2561* e = NULL; HASH_FIND_INT(map, &basket1[i], e);
        if (e) e->val++; else { e = (HM2561*)malloc(sizeof(HM2561)); e->key = basket1[i]; e->val = 1; HASH_ADD_INT(map, key, e); }
    }
    for (int i = 0; i < basket2Size; i++) {
        HM2561* e = NULL; HASH_FIND_INT(map, &basket2[i], e);
        if (e) e->val--; else { e = (HM2561*)malloc(sizeof(HM2561)); e->key = basket2[i]; e->val = -1; HASH_ADD_INT(map, key, e); }
    }
    int* swaps = (int*)malloc((basket1Size + basket2Size) * sizeof(int));
    int slen = 0;
    HM2561 *cur, *tmp;
    HASH_ITER(hh, map, cur, tmp) {
        if (cur->val % 2 != 0) { free(swaps); return -1; }
        int need = cur->val > 0 ? cur->val / 2 : -cur->val / 2;
        for (int i = 0; i < need; i++) swaps[slen++] = cur->key;
        HASH_DEL(map, cur); free(cur);
    }
    qsort(swaps, slen, sizeof(int), cmp2561);
    int minVal = basket1[0];
    for (int i = 1; i < basket1Size; i++) if (basket1[i] < minVal) minVal = basket1[i];
    for (int i = 0; i < basket2Size; i++) if (basket2[i] < minVal) minVal = basket2[i];
    long long cost = 0;
    for (int i = 0; i < slen / 2; i++) {
        int v = swaps[i] < 2 * minVal ? swaps[i] : 2 * minVal;
        cost += v;
    }
    free(swaps);
    return cost;
}
