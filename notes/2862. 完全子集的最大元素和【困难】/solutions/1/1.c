long long maximumSum(int* nums, int numsSize) {
    long long ans = 0;
    for (int c = 1; c <= numsSize; c++) {
        long long sum = 0;
        for (long long j = 1; c * j * j <= numsSize; j++) {
            sum += nums[(int)(c * j * j) - 1];
        }
        if (sum > ans) ans = sum;
    }
    return ans;
}
