long long seg[400005];
int seg_m;

void seg_update(int node, int lo, int hi, int pos, long long val) {
    if (lo == hi) { if (val > seg[node]) seg[node] = val; return; }
    int mid = (lo + hi) / 2;
    if (pos <= mid) seg_update(2 * node, lo, mid, pos, val);
    else seg_update(2 * node + 1, mid + 1, hi, pos, val);
    seg[node] = seg[2 * node] > seg[2 * node + 1] ? seg[2 * node] : seg[2 * node + 1];
}

long long seg_query(int node, int lo, int hi, int l, int r) {
    if (l > r || lo > r || hi < l) return -1e18;
    if (l <= lo && hi <= r) return seg[node];
    int mid = (lo + hi) / 2;
    long long a = seg_query(2 * node, lo, mid, l, r);
    long long b = seg_query(2 * node + 1, mid + 1, hi, l, r);
    return a > b ? a : b;
}

int cmpLL(const void *a, const void *b) {
    long long x = *(long long *)a, y = *(long long *)b;
    return (x > y) - (x < y);
}

long long maxBalancedSubsequenceSum(int* nums, int numsSize) {
    int n = numsSize;
    long long *b = malloc(n * sizeof(long long));
    long long *sorted = malloc(n * sizeof(long long));
    for (int i = 0; i < n; i++) {
        b[i] = (long long)nums[i] - i;
        sorted[i] = b[i];
    }
    qsort(sorted, n, sizeof(long long), cmpLL);
    int m = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0 || sorted[i] != sorted[i - 1]) sorted[m++] = sorted[i];
    }
    seg_m = m;
    for (int i = 0; i < 4 * m; i++) seg[i] = (long long)-1e18;
    long long ans = (long long)-1e18;
    for (int i = 0; i < n; i++) {
        int lo = 0, hi = m - 1, r = 0;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (sorted[mid] <= b[i]) { r = mid; lo = mid + 1; }
            else hi = mid - 1;
        }
        long long best = seg_query(1, 0, m - 1, 0, r);
        long long dp = (long long)nums[i] + (best > 0 ? best : 0);
        seg_update(1, 0, m - 1, r, dp);
        if (dp > ans) ans = dp;
    }
    free(b); free(sorted);
    return ans;
}
