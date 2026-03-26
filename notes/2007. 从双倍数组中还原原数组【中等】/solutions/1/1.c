int cmp2007(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int* findOriginalArray(int* changed, int changedSize, int* returnSize) {
    if (changedSize % 2 != 0) { *returnSize = 0; return NULL; }
    qsort(changed, changedSize, sizeof(int), cmp2007);
    int maxVal = changed[changedSize - 1];
    int* count = (int*)calloc(2 * maxVal + 2, sizeof(int));
    for (int i = 0; i < changedSize; i++) count[changed[i]]++;
    int* result = (int*)malloc(changedSize / 2 * sizeof(int));
    int idx = 0;
    for (int i = 0; i < changedSize; i++) {
        if (count[changed[i]] <= 0) continue;
        if (changed[i] * 2 > 2 * maxVal || count[changed[i] * 2] <= 0) {
            free(count); free(result);
            *returnSize = 0;
            return NULL;
        }
        result[idx++] = changed[i];
        count[changed[i]]--;
        count[changed[i] * 2]--;
    }
    free(count);
    *returnSize = idx;
    return result;
}
