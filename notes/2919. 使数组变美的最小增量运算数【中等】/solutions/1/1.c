long long minIncrementOperations(int* nums, int numsSize, int k) {
    int n = numsSize;
    long long f0 = nums[0] < k ? (long long)k - nums[0] : 0;
    long long f1 = nums[1] < k ? (long long)k - nums[1] : 0;
    long long f2 = nums[2] < k ? (long long)k - nums[2] : 0;
    for (int i = 3; i < n; i++) {
        long long cost = nums[i] < k ? (long long)k - nums[i] : 0;
        long long mn = f0 < f1 ? f0 : f1;
        if (f2 < mn) mn = f2;
        long long fi = cost + mn;
        f0 = f1;
        f1 = f2;
        f2 = fi;
    }
    long long mn = f0 < f1 ? f0 : f1;
    if (f2 < mn) mn = f2;
    return mn;
}
