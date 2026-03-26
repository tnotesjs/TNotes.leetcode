long long *distance(int *nums, int numsSize, int *returnSize) {
    int n = numsSize;
    long long *ans = calloc(n, sizeof(long long));
    *returnSize = n;
    // 用哈希表分组，简单起见排序分组
    int *ids = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) ids[i] = i;
    // 按值排序
    int *g_nums = nums;
    // 使用全局变量避免
    // 简单做法：直接遍历
    // 用排序的 (value, index) 对
    int **pairs = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        pairs[i] = malloc(2 * sizeof(int));
        pairs[i][0] = nums[i];
        pairs[i][1] = i;
    }
    // sort by value
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (pairs[j][0] < pairs[i][0]) {
                int *tmp = pairs[i]; pairs[i] = pairs[j]; pairs[j] = tmp;
            }
        }
    }
    // 分组处理
    int start = 0;
    while (start < n) {
        int end = start;
        while (end < n && pairs[end][0] == pairs[start][0]) end++;
        int m = end - start;
        long long *pre = calloc(m + 1, sizeof(long long));
        for (int i = 0; i < m; i++) pre[i + 1] = pre[i] + pairs[start + i][1];
        for (int i = 0; i < m; i++) {
            long long idx = pairs[start + i][1];
            long long left = idx * i - pre[i];
            long long right = pre[m] - pre[i + 1] - idx * (m - i - 1);
            ans[idx] = left + right;
        }
        free(pre);
        start = end;
    }
    for (int i = 0; i < n; i++) free(pairs[i]);
    free(pairs); free(ids);
    return ans;
}
