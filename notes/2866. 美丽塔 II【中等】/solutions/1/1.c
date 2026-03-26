long long maximumSumOfHeights(int* maxHeights, int maxHeightsSize) {
    int n = maxHeightsSize;
    long long *left = (long long *)malloc(n * sizeof(long long));
    long long *right = (long long *)malloc(n * sizeof(long long));
    int *stk = (int *)malloc(n * sizeof(int));
    int top;
    // 计算左侧前缀和
    top = 0;
    for (int i = 0; i < n; i++) {
        while (top > 0 && maxHeights[stk[top - 1]] >= maxHeights[i]) top--;
        if (top == 0) {
            left[i] = (long long)maxHeights[i] * (i + 1);
        } else {
            int j = stk[top - 1];
            left[i] = left[j] + (long long)maxHeights[i] * (i - j);
        }
        stk[top++] = i;
    }
    // 计算右侧后缀和
    top = 0;
    for (int i = n - 1; i >= 0; i--) {
        while (top > 0 && maxHeights[stk[top - 1]] >= maxHeights[i]) top--;
        if (top == 0) {
            right[i] = (long long)maxHeights[i] * (n - i);
        } else {
            int j = stk[top - 1];
            right[i] = right[j] + (long long)maxHeights[i] * (j - i);
        }
        stk[top++] = i;
    }
    long long ans = 0;
    for (int i = 0; i < n; i++) {
        long long total = left[i] + right[i] - maxHeights[i];
        if (total > ans) ans = total;
    }
    free(left); free(right); free(stk);
    return ans;
}
