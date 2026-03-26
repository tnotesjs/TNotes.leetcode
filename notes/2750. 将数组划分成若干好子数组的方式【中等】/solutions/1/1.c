int numberOfGoodSubarraySplits(int *nums, int numsSize) {
    long long MOD = 1000000007;
    int prev = -1;
    long long res = 1;
    int found = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 1) {
            if (found) {
                res = res * (i - prev) % MOD;
            }
            prev = i;
            found = 1;
        }
    }
    return found ? (int)res : 0;
}
