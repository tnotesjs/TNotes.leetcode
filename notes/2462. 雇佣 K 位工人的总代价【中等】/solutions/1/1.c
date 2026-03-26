// 最小堆辅助函数
void swap2462(int *a, int *b) { int t = *a; *a = *b; *b = t; }
void heapPush2462(int *h, int *sz, int val) {
    h[(*sz)++] = val;
    int i = *sz - 1;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h[p] <= h[i]) break;
        swap2462(&h[p], &h[i]);
        i = p;
    }
}
int heapPop2462(int *h, int *sz) {
    int top = h[0];
    h[0] = h[--(*sz)];
    int i = 0;
    while (1) {
        int s = i, l = 2*i+1, r = 2*i+2;
        if (l < *sz && h[l] < h[s]) s = l;
        if (r < *sz && h[r] < h[s]) s = r;
        if (s == i) break;
        swap2462(&h[s], &h[i]);
        i = s;
    }
    return top;
}

long long totalCost(int* costs, int costsSize, int k, int candidates) {
    int *lh = (int *)malloc(costsSize * sizeof(int));
    int *rh = (int *)malloc(costsSize * sizeof(int));
    int lsz = 0, rsz = 0;
    int lo = 0, hi = costsSize - 1;
    for (int i = 0; i < candidates && lo <= hi; i++) heapPush2462(lh, &lsz, costs[lo++]);
    for (int i = 0; i < candidates && lo <= hi; i++) heapPush2462(rh, &rsz, costs[hi--]);
    long long total = 0;
    for (int i = 0; i < k; i++) {
        int lv = lsz > 0 ? lh[0] : 2147483647;
        int rv = rsz > 0 ? rh[0] : 2147483647;
        if (lv <= rv) {
            total += heapPop2462(lh, &lsz);
            if (lo <= hi) heapPush2462(lh, &lsz, costs[lo++]);
        } else {
            total += heapPop2462(rh, &rsz);
            if (lo <= hi) heapPush2462(rh, &rsz, costs[hi--]);
        }
    }
    free(lh); free(rh);
    return total;
}
