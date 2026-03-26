int sumImbalanceNumbers(int *nums, int numsSize) {
    int n = numsSize;
    int res = 0;
    for (int i = 0; i < n; i++) {
        int seen[n + 2];
        memset(seen, 0, sizeof(seen));
        int cnt = 0;
        for (int j = i; j < n; j++) {
            int v = nums[j];
            if (seen[v]) {
                // 不变
            } else if (v > 0 && seen[v - 1] && v < n && seen[v + 1]) {
                cnt--;
            } else if ((v == 0 || !seen[v - 1]) && (v >= n || !seen[v + 1])) {
                if (j > i) cnt++;
            }
            seen[v] = 1;
            res += cnt;
        }
    }
    return res;
}
