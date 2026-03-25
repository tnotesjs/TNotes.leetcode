static int* gA1686; static int* gB1686;
int cmp1686(const void* a, const void* b) {
    int i = *(int*)a, j = *(int*)b;
    return (gA1686[j]+gB1686[j]) - (gA1686[i]+gB1686[i]);
}

int stoneGameVI(int* aliceValues, int aliceValuesSize, int* bobValues, int bobValuesSize) {
    int n = aliceValuesSize;
    gA1686 = aliceValues; gB1686 = bobValues;
    int* idx = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) idx[i] = i;
    qsort(idx, n, sizeof(int), cmp1686);
    int alice = 0, bob = 0;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) alice += aliceValues[idx[i]];
        else bob += bobValues[idx[i]];
    }
    free(idx);
    return alice > bob ? 1 : alice < bob ? -1 : 0;
}
