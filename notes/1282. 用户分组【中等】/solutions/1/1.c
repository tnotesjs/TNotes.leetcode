int** groupThePeople(int* groupSizes, int groupSizesSize, int* returnSize, int** returnColumnSizes) {
    int** groups = malloc(sizeof(int*) * groupSizesSize);
    int* groupIdx = calloc(groupSizesSize + 1, sizeof(int)); // groupIdx[size] = current count in temp
    int** temp = malloc(sizeof(int*) * (groupSizesSize + 1));
    for (int i = 0; i <= groupSizesSize; i++) temp[i] = malloc(sizeof(int) * (i > 0 ? i : 1));
    *returnSize = 0;
    *returnColumnSizes = malloc(sizeof(int) * groupSizesSize);
    for (int i = 0; i < groupSizesSize; i++) {
        int size = groupSizes[i];
        temp[size][groupIdx[size]++] = i;
        if (groupIdx[size] == size) {
            groups[*returnSize] = malloc(sizeof(int) * size);
            for (int j = 0; j < size; j++) groups[*returnSize][j] = temp[size][j];
            (*returnColumnSizes)[*returnSize] = size;
            (*returnSize)++;
            groupIdx[size] = 0;
        }
    }
    for (int i = 0; i <= groupSizesSize; i++) free(temp[i]);
    free(temp);
    free(groupIdx);
    return groups;
}
