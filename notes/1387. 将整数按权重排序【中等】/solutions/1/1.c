int weight(int x) {
    int steps = 0;
    while (x != 1) {
        x = (x % 2 == 0) ? x / 2 : 3 * x + 1;
        steps++;
    }
    return steps;
}

int cmp(const void* a, const void* b) {
    int va = *(int*)a, vb = *(int*)b;
    int wa = weight(va), wb = weight(vb);
    return wa != wb ? wa - wb : va - vb;
}

int getKth(int lo, int hi, int k) {
    int n = hi - lo + 1;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) arr[i] = lo + i;
    qsort(arr, n, sizeof(int), cmp);
    int res = arr[k - 1];
    free(arr);
    return res;
}
