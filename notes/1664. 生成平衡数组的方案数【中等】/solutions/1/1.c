int waysToMakeFair(int* nums, int numsSize) {
    long long suffEven = 0, suffOdd = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i % 2 == 0) suffEven += nums[i];
        else suffOdd += nums[i];
    }
    long long prefEven = 0, prefOdd = 0;
    int res = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i % 2 == 0) suffEven -= nums[i];
        else suffOdd -= nums[i];
        if (prefEven + suffOdd == prefOdd + suffEven) res++;
        if (i % 2 == 0) prefEven += nums[i];
        else prefOdd += nums[i];
    }
    return res;
}
