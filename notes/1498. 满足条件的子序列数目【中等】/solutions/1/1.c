int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int numSubseq(int* nums, int numsSize, int target) {
    long long MOD = 1000000007;
    qsort(nums, numsSize, sizeof(int), cmpInt);
    long long* pow2 = (long long*)malloc(numsSize * sizeof(long long));
    pow2[0] = 1;
    for (int i = 1; i < numsSize; i++)
        pow2[i] = pow2[i - 1] * 2 % MOD;
    long long res = 0;
    int left = 0, right = numsSize - 1;
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            res = (res + pow2[right - left]) % MOD;
            left++;
        } else right--;
    }
    free(pow2);
    return (int)res;
}
