int cmpDesc(const void* a, const void* b) {
    const int* ra = *(const int**)a;
    const int* rb = *(const int**)b;
    if (rb[1] != ra[1]) return rb[1] - ra[1];
    return rb[0] - ra[0];
}

int* filterRestaurants(int** restaurants, int restaurantsSize, int* restaurantsColSize,
    int veganFriendly, int maxPrice, int maxDistance, int* returnSize) {
    int** filtered = malloc(sizeof(int*) * restaurantsSize);
    int cnt = 0;
    for (int i = 0; i < restaurantsSize; i++) {
        if (veganFriendly && restaurants[i][2] != 1) continue;
        if (restaurants[i][3] > maxPrice || restaurants[i][4] > maxDistance) continue;
        filtered[cnt++] = restaurants[i];
    }
    qsort(filtered, cnt, sizeof(int*), cmpDesc);
    int* res = malloc(sizeof(int) * cnt);
    for (int i = 0; i < cnt; i++) res[i] = filtered[i][0];
    *returnSize = cnt;
    free(filtered);
    return res;
}
