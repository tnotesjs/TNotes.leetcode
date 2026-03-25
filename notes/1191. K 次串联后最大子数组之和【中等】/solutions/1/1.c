int kConcatenationMaxSum(int* arr, int arrSize, int k) {
    long long MOD = 1000000007;
    long long totalSum = 0;
    for (int i = 0; i < arrSize; i++) totalSum += arr[i];
    long long maxSum = 0, cur = 0;
    int times = k < 2 ? k : 2;
    for (int t = 0; t < times; t++) {
        for (int i = 0; i < arrSize; i++) {
            cur = (cur > 0 ? cur : 0) + arr[i];
            if (cur > maxSum) maxSum = cur;
        }
    }
    if (k >= 3 && totalSum > 0) {
        maxSum += (long long)(k - 2) * totalSum;
    }
    return (int)(maxSum % MOD);
}
