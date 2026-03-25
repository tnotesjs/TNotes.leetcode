int popcount(int x) {
    int cnt = 0;
    while (x) { cnt++; x &= x - 1; }
    return cnt;
}

int ans;

void dfs(int* masks, int n, int idx, int cur) {
    int cnt = popcount(cur);
    if (cnt > ans) ans = cnt;
    for (int i = idx; i < n; i++) {
        if ((cur & masks[i]) == 0) {
            dfs(masks, n, i + 1, cur | masks[i]);
        }
    }
}

int maxLength(char** arr, int arrSize) {
    int masks[16], n = 0;
    for (int i = 0; i < arrSize; i++) {
        int mask = 0, valid = 1;
        for (int j = 0; arr[i][j]; j++) {
            int bit = 1 << (arr[i][j] - 'a');
            if (mask & bit) { valid = 0; break; }
            mask |= bit;
        }
        if (valid) masks[n++] = mask;
    }
    ans = 0;
    dfs(masks, n, 0, 0);
    return ans;
}
