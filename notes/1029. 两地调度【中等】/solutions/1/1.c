int cmp(const void* a, const void* b) {
    int* pa = *(int**)a;
    int* pb = *(int**)b;
    return (pa[0] - pa[1]) - (pb[0] - pb[1]);
}

int twoCitySchedCost(int** costs, int costsSize, int* costsColSize) {
    qsort(costs, costsSize, sizeof(int*), cmp);
    int n = costsSize / 2;
    int total = 0;
    for (int i = 0; i < n; i++) total += costs[i][0];
    for (int i = n; i < costsSize; i++) total += costs[i][1];
    return total;
}
