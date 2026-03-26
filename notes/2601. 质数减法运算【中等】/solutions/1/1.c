bool primeSubOperation(int *nums, int numsSize) {
    int isPrime[1001];
    memset(isPrime, 1, sizeof(isPrime));
    isPrime[0] = isPrime[1] = 0;
    for (int i = 2; i * i < 1001; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j < 1001; j += i) isPrime[j] = 0;
        }
    }
    int prev = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] <= prev) return false;
        // 找最大的质数 p 使得 nums[i] - p > prev，即 p < nums[i] - prev
        int best = nums[i]; // 不减任何质数
        for (int p = nums[i] - prev - 1; p >= 2; p--) {
            if (isPrime[p]) {
                best = nums[i] - p;
                break;
            }
        }
        prev = best;
    }
    return true;
}
