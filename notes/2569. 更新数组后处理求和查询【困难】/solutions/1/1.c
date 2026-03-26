typedef struct {
    int* tree;
    int* lazy;
    int n;
} SegTree;

void build(SegTree* st, int* nums, int o, int l, int r) {
    if (l == r) { st->tree[o] = nums[l]; return; }
    int m = (l + r) / 2;
    build(st, nums, 2 * o, l, m);
    build(st, nums, 2 * o + 1, m + 1, r);
    st->tree[o] = st->tree[2 * o] + st->tree[2 * o + 1];
}

void pushDown(SegTree* st, int o, int l, int r) {
    if (st->lazy[o]) {
        int m = (l + r) / 2;
        st->tree[2 * o] = (m - l + 1) - st->tree[2 * o];
        st->tree[2 * o + 1] = (r - m) - st->tree[2 * o + 1];
        st->lazy[2 * o] ^= 1;
        st->lazy[2 * o + 1] ^= 1;
        st->lazy[o] = 0;
    }
}

void update(SegTree* st, int o, int l, int r, int ql, int qr) {
    if (ql <= l && r <= qr) {
        st->tree[o] = (r - l + 1) - st->tree[o];
        st->lazy[o] ^= 1;
        return;
    }
    pushDown(st, o, l, r);
    int m = (l + r) / 2;
    if (ql <= m) update(st, 2 * o, l, m, ql, qr);
    if (qr > m) update(st, 2 * o + 1, m + 1, r, ql, qr);
    st->tree[o] = st->tree[2 * o] + st->tree[2 * o + 1];
}

long long* handleQuery(int* nums1, int nums1Size, int* nums2, int nums2Size, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int n = nums1Size;
    SegTree st;
    st.n = n;
    st.tree = (int*)calloc(4 * n, sizeof(int));
    st.lazy = (int*)calloc(4 * n, sizeof(int));
    build(&st, nums1, 1, 0, n - 1);

    long long sum2 = 0;
    for (int i = 0; i < n; i++) sum2 += nums2[i];

    long long* ans = (long long*)malloc(queriesSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < queriesSize; i++) {
        int type = queries[i][0], l = queries[i][1], r = queries[i][2];
        if (type == 1) {
            update(&st, 1, 0, n - 1, l, r);
        } else if (type == 2) {
            sum2 += (long long)st.tree[1] * l;
        } else {
            ans[cnt++] = sum2;
        }
    }
    free(st.tree);
    free(st.lazy);
    *returnSize = cnt;
    return ans;
}
