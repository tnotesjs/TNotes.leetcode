long long minCost(int* nums, int numsSize, int x) {
    int n = numsSize;
    long long* minC = (long long*)malloc(n * sizeof(long long));
    long long sum = 0;
    for (int i = 0; i < n; i++) { minC[i] = nums[i]; sum += nums[i]; }
    long long res = sum;
    for (int k = 1; k < n; k++) {
        sum = 0;
        for (int i = 0; i < n; i++) {
            int idx = (i + k) % n;
            if (nums[idx] < minC[i]) minC[i] = nums[idx];
            sum += minC[i];
        }
        long long total = (long long)k * x + sum;
        if (total < res) res = total;
    }
    free(minC);
    return res;
}
