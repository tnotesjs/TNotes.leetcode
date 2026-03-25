int cmpAbs(const void* a, const void* b) {
    int va = abs(*(int*)a), vb = abs(*(int*)b);
    return va != vb ? va - vb : *(int*)a - *(int*)b;
}

bool canReorderDoubled(int* arr, int arrSize) {
    qsort(arr, arrSize, sizeof(int), cmpAbs);
    int offset = 200000;
    int* count = calloc(400001, sizeof(int));
    for (int i = 0; i < arrSize; i++) count[arr[i] + offset]++;

    for (int i = 0; i < arrSize; i++) {
        int x = arr[i];
        if (count[x + offset] == 0) continue;
        count[x + offset]--;
        int d = 2 * x;
        if (count[d + offset] == 0) {
            free(count);
            return false;
        }
        count[d + offset]--;
    }

    free(count);
    return true;
}
