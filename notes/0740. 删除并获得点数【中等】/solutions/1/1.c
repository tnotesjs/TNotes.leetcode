int deleteAndEarn(int* nums, int numsSize) {
    int mx = 0;
    for (int i = 0; i < numsSize; i++) if (nums[i] > mx) mx = nums[i];
    int* sum = (int*)calloc(mx + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) sum[nums[i]] += nums[i];
    int prev = 0, curr = sum[0];
    for (int i = 1; i <= mx; i++) {
        int tmp = curr;
        curr = curr > prev + sum[i] ? curr : prev + sum[i];
        prev = tmp;
    }
    free(sum);
    return curr;
}
