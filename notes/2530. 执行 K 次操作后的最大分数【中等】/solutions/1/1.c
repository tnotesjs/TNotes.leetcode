void siftDown(long long *h, int n, int i) {
    while (1) {
        int s = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < n && h[l] > h[s]) s = l;
        if (r < n && h[r] > h[s]) s = r;
        if (s == i) break;
        long long t = h[i]; h[i] = h[s]; h[s] = t;
        i = s;
    }
}

long long maxKelements(int* nums, int numsSize, int k) {
    long long *heap = (long long *)malloc(sizeof(long long) * numsSize);
    for (int i = 0; i < numsSize; i++) heap[i] = nums[i];
    for (int i = numsSize / 2 - 1; i >= 0; i--) siftDown(heap, numsSize, i);

    long long score = 0;
    for (int i = 0; i < k; i++) {
        long long mx = heap[0];
        score += mx;
        heap[0] = (mx + 2) / 3;
        siftDown(heap, numsSize, 0);
    }
    free(heap);
    return score;
}
