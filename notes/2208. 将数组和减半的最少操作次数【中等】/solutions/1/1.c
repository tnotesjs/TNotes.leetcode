void heapPush2208(double *heap, int *size, double val) {
    heap[(*size)++] = val;
    int i = *size - 1;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (heap[p] >= heap[i]) break;
        double tmp = heap[p]; heap[p] = heap[i]; heap[i] = tmp;
        i = p;
    }
}

double heapPop2208(double *heap, int *size) {
    double top = heap[0];
    heap[0] = heap[--(*size)];
    int i = 0;
    while (1) {
        int max = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < *size && heap[l] > heap[max]) max = l;
        if (r < *size && heap[r] > heap[max]) max = r;
        if (max == i) break;
        double tmp = heap[i]; heap[i] = heap[max]; heap[max] = tmp;
        i = max;
    }
    return top;
}

int halveArray(int* nums, int numsSize) {
    double *heap = (double *)malloc(numsSize * sizeof(double));
    int heapSize = 0;
    double total = 0;
    for (int i = 0; i < numsSize; i++) {
        heapPush2208(heap, &heapSize, (double)nums[i]);
        total += nums[i];
    }
    double target = total / 2.0;
    double reduced = 0;
    int ops = 0;
    while (reduced < target) {
        double mx = heapPop2208(heap, &heapSize);
        double half = mx / 2.0;
        reduced += half;
        heapPush2208(heap, &heapSize, half);
        ops++;
    }
    free(heap);
    return ops;
}
