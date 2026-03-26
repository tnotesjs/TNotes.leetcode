long long maximumSumOfHeights(int* maxHeights, int maxHeightsSize) {
    long long ans = 0;
    int n = maxHeightsSize;
    for (int i = 0; i < n; i++) {
        long long sum = maxHeights[i];
        int cur = maxHeights[i];
        for (int j = i - 1; j >= 0; j--) {
            if (maxHeights[j] < cur) cur = maxHeights[j];
            sum += cur;
        }
        cur = maxHeights[i];
        for (int j = i + 1; j < n; j++) {
            if (maxHeights[j] < cur) cur = maxHeights[j];
            sum += cur;
        }
        if (sum > ans) ans = sum;
    }
    return ans;
}
