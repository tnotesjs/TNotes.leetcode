static int gK2545;

int cmp2545(const void* a, const void* b) {
    int va = (*(int**)a)[gK2545], vb = (*(int**)b)[gK2545];
    return vb - va;
}

int** sortTheStudents(int** score, int scoreSize, int* scoreColSize, int k, int* returnSize, int** returnColumnSizes) {
    gK2545 = k;
    qsort(score, scoreSize, sizeof(int*), cmp2545);
    *returnSize = scoreSize;
    *returnColumnSizes = (int*)malloc(scoreSize * sizeof(int));
    for (int i = 0; i < scoreSize; i++) (*returnColumnSizes)[i] = scoreColSize[i];
    return score;
}
