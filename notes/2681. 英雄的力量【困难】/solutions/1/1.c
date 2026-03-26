int cmpInt_2681(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int sumOfPower(int* nums, int numsSize) {
    long long MOD = 1000000007;
    qsort(nums, numsSize, sizeof(int), cmpInt_2681);
    long long ans = 0, prefix = 0;
    for (int j = 0; j < numsSize; j++) {
        long long v = nums[j];
        long long coeff = (prefix + v) % MOD;
        ans = (ans + v % MOD * (v % MOD) % MOD * coeff) % MOD;
        prefix = (2 * prefix + v) % MOD;
    }
    return (int)ans;
}
