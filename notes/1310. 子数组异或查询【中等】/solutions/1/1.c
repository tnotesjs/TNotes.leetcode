int* xorQueries(int* arr, int arrSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int* prefix = calloc(arrSize + 1, sizeof(int));
    for (int i = 0; i < arrSize; i++) prefix[i + 1] = prefix[i] ^ arr[i];
    int* res = malloc(sizeof(int) * queriesSize);
    *returnSize = queriesSize;
    for (int i = 0; i < queriesSize; i++) {
        res[i] = prefix[queries[i][1] + 1] ^ prefix[queries[i][0]];
    }
    free(prefix);
    return res;
}
