int cmp2542(const void* a, const void* b) {
    return ((int*)b)[1] - ((int*)a)[1];
}

long long maxScore(int* nums1, int nums1Size, int* nums2, int nums2Size, int k) {
    int n = nums1Size;
    int (*pairs)[2] = malloc(n * sizeof(int[2]));
    for (int i = 0; i < n; i++) { pairs[i][0] = nums1[i]; pairs[i][1] = nums2[i]; }
    qsort(pairs, n, sizeof(int[2]), cmp2542);
    // 最小堆
    int* heap = (int*)malloc(n * sizeof(int));
    int hsize = 0;
    void hpush(int v) {
        heap[hsize] = v; int i = hsize++;
        while (i > 0) { int p = (i - 1) / 2; if (heap[p] <= heap[i]) break; int t = heap[p]; heap[p] = heap[i]; heap[i] = t; i = p; }
    }
    int hpop() {
        int top = heap[0]; heap[0] = heap[--hsize]; int i = 0;
        while (1) { int m = i, l = 2*i+1, r = 2*i+2;
            if (l < hsize && heap[l] < heap[m]) m = l;
            if (r < hsize && heap[r] < heap[m]) m = r;
            if (m == i) break; int t = heap[i]; heap[i] = heap[m]; heap[m] = t; i = m; }
        return top;
    }
    long long sum = 0, ans = 0;
    for (int i = 0; i < n; i++) {
        hpush(pairs[i][0]);
        sum += pairs[i][0];
        if (hsize > k) sum -= hpop();
        if (hsize == k) { long long cur = sum * pairs[i][1]; if (cur > ans) ans = cur; }
    }
    free(pairs); free(heap);
    return ans;
}
