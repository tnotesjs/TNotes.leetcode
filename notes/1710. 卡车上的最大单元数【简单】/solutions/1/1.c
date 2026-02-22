int cmp(const void* a, const void* b) {
    return (*(int**)b)[1] - (*(int**)a)[1];
}

int maximumUnits(int** boxTypes, int boxTypesSize, int* boxTypesColSize, int truckSize) {
    qsort(boxTypes, boxTypesSize, sizeof(int*), cmp);
    int remaining = truckSize;
    int total = 0;
    for (int i = 0; i < boxTypesSize && remaining > 0; i++) {
        int take = boxTypes[i][0] < remaining ? boxTypes[i][0] : remaining;
        total += take * boxTypes[i][1];
        remaining -= take;
    }
    return total;
}
