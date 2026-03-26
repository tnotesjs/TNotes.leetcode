long long sumD_arr[400005], sumD2_arr[400005], lz[400005];
int cnt_arr[400005];
const long long MOD_VAL = 1000000007;

void build(int node, int l, int r) {
    sumD_arr[node] = sumD2_arr[node] = lz[node] = 0;
    cnt_arr[node] = r - l + 1;
    if (l == r) return;
    int mid = (l + r) / 2;
    build(2 * node, l, mid);
    build(2 * node + 1, mid + 1, r);
}

void pushDown(int node) {
    if (lz[node]) {
        long long val = lz[node];
        for (int i = 0; i < 2; i++) {
            int child = 2 * node + i;
            long long c = cnt_arr[child];
            sumD2_arr[child] = (sumD2_arr[child] + 2 * val % MOD_VAL * sumD_arr[child] % MOD_VAL + val * val % MOD_VAL * c % MOD_VAL) % MOD_VAL;
            sumD_arr[child] = (sumD_arr[child] + val * c % MOD_VAL) % MOD_VAL;
            lz[child] = (lz[child] + val) % MOD_VAL;
        }
        lz[node] = 0;
    }
}

void update(int node, int l, int r, int ql, int qr) {
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        long long c = cnt_arr[node];
        sumD2_arr[node] = (sumD2_arr[node] + 2 * sumD_arr[node] % MOD_VAL + c) % MOD_VAL;
        sumD_arr[node] = (sumD_arr[node] + c) % MOD_VAL;
        lz[node] = (lz[node] + 1) % MOD_VAL;
        return;
    }
    pushDown(node);
    int mid = (l + r) / 2;
    update(2 * node, l, mid, ql, qr);
    update(2 * node + 1, mid + 1, r, ql, qr);
    sumD_arr[node] = (sumD_arr[2 * node] + sumD_arr[2 * node + 1]) % MOD_VAL;
    sumD2_arr[node] = (sumD2_arr[2 * node] + sumD2_arr[2 * node + 1]) % MOD_VAL;
}

long long query(int node, int l, int r, int ql, int qr) {
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return sumD2_arr[node];
    pushDown(node);
    int mid = (l + r) / 2;
    return (query(2 * node, l, mid, ql, qr) + query(2 * node + 1, mid + 1, r, ql, qr)) % MOD_VAL;
}

int sumCounts(int* nums, int numsSize) {
    int n = numsSize;
    build(1, 0, n - 1);

    int* prev = (int*)malloc(100001 * sizeof(int));
    memset(prev, -1, 100001 * sizeof(int));

    long long ans = 0;
    for (int i = 0; i < n; i++) {
        int p = prev[nums[i]] + 1;
        update(1, 0, n - 1, p, i);
        prev[nums[i]] = i;
        ans = (ans + query(1, 0, n - 1, 0, i)) % MOD_VAL;
    }

    free(prev);
    return (int)ans;
}
