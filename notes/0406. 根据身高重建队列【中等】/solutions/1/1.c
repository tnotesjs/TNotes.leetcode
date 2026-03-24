int cmp(const void* a, const void* b) {
    int* pa = *(int**)a, *pb = *(int**)b;
    if (pa[0] != pb[0]) return pb[0] - pa[0];
    return pa[1] - pb[1];
}

int** reconstructQueue(int** people, int peopleSize, int* peopleColSize, int* returnSize, int** returnColumnSizes) {
    qsort(people, peopleSize, sizeof(int*), cmp);
    int** res = (int**)malloc(sizeof(int*) * peopleSize);
    *returnSize = peopleSize;
    *returnColumnSizes = (int*)malloc(sizeof(int) * peopleSize);
    int size = 0;
    for (int i = 0; i < peopleSize; i++) {
        int pos = people[i][1];
        for (int j = size; j > pos; j--) res[j] = res[j - 1];
        res[pos] = people[i];
        (*returnColumnSizes)[i] = 2;
        size++;
    }
    return res;
}
