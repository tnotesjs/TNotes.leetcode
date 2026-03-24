int maxRotateFunction(int* nums, int numsSize) {
    long long sum = 0, f = 0;
    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
        f += (long long)i * nums[i];
    }
    long long maxVal = f;
    for (int i = numsSize - 1; i >= 1; i--) {
        f = f + sum - (long long)numsSize * nums[i];
        if (f > maxVal) maxVal = f;
    }
    return (int)maxVal;
}
