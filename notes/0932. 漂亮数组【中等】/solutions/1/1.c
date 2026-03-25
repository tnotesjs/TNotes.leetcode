int* beautifulArray(int n, int* returnSize) {
    *returnSize = n;
    int* res = malloc(n * sizeof(int));
    if (n == 1) {
        res[0] = 1;
        return res;
    }

    int oddSize, evenSize;
    int* odd = beautifulArray((n + 1) / 2, &oddSize);
    int* even = beautifulArray(n / 2, &evenSize);

    int idx = 0;
    for (int i = 0; i < oddSize; i++) res[idx++] = 2 * odd[i] - 1;
    for (int i = 0; i < evenSize; i++) res[idx++] = 2 * even[i];

    free(odd);
    free(even);
    return res;
}
