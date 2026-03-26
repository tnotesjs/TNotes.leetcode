int res2305;

void dfs2305(int* cookies, int n, int* children, int k, int idx) {
    if (idx == n) {
        int maxVal = 0;
        for (int i = 0; i < k; i++) {
            if (children[i] > maxVal) maxVal = children[i];
        }
        if (maxVal < res2305) res2305 = maxVal;
        return;
    }
    for (int i = 0; i < k; i++) {
        if (children[i] + cookies[idx] >= res2305) continue;
        // 跳过重复状态
        int dup = 0;
        for (int j = 0; j < i; j++) {
            if (children[j] == children[i]) { dup = 1; break; }
        }
        if (dup) continue;
        children[i] += cookies[idx];
        dfs2305(cookies, n, children, k, idx + 1);
        children[i] -= cookies[idx];
    }
}

int distributeCookies(int* cookies, int cookiesSize, int k) {
    res2305 = INT_MAX;
    int* children = (int*)calloc(k, sizeof(int));
    dfs2305(cookies, cookiesSize, children, k, 0);
    free(children);
    return res2305;
}
