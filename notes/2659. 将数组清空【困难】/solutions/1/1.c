int* g_nums_2659;
int cmp_2659(const void* a, const void* b) {
    int ia = *(int*)a, ib = *(int*)b;
    if (g_nums_2659[ia] != g_nums_2659[ib])
        return g_nums_2659[ia] < g_nums_2659[ib] ? -1 : 1;
    return ia - ib;
}

long long countOperationsToEmptyArray(int* nums, int numsSize) {
    int n = numsSize;
    int* indices = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) indices[i] = i;
    g_nums_2659 = nums;
    qsort(indices, n, sizeof(int), cmp_2659);

    int* bit = (int*)calloc(n + 2, sizeof(int));
    void update(int i, int val) {
        for (i += 1; i <= n; i += i & (-i)) bit[i] += val;
    }
    int query(int i) {
        int s = 0;
        for (i += 1; i > 0; i -= i & (-i)) s += bit[i];
        return s;
    }

    for (int i = 0; i < n; i++) update(i, 1);

    long long ops = n;
    int prev = -1;
    for (int k = 0; k < n; k++) {
        int cur = indices[k];
        if (prev == -1) {
            ops += cur;
        } else if (cur > prev) {
            int l = prev + 1, r = cur - 1;
            if (l <= r) ops += query(r) - (l > 0 ? query(l - 1) : 0);
        } else {
            int cnt1 = 0, cnt2 = 0;
            if (prev + 1 <= n - 1) cnt1 = query(n - 1) - query(prev);
            if (cur - 1 >= 0) cnt2 = query(cur - 1);
            ops += cnt1 + cnt2;
        }
        update(cur, -1);
        prev = cur;
    }
    free(indices);
    free(bit);
    return ops;
}
