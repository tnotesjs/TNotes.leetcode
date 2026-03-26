int sumOfBeauties(int* nums, int numsSize) {
    int n = numsSize;
    int* prefixMax = (int*)malloc(n * sizeof(int));
    int* suffixMin = (int*)malloc(n * sizeof(int));
    prefixMax[0] = nums[0];
    for (int i = 1; i < n; i++)
        prefixMax[i] = nums[i] > prefixMax[i - 1] ? nums[i] : prefixMax[i - 1];
    suffixMin[n - 1] = nums[n - 1];
    for (int i = n - 2; i >= 0; i--)
        suffixMin[i] = nums[i] < suffixMin[i + 1] ? nums[i] : suffixMin[i + 1];
    int sum = 0;
    for (int i = 1; i < n - 1; i++) {
        if (prefixMax[i - 1] < nums[i] && nums[i] < suffixMin[i + 1]) sum += 2;
        else if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) sum += 1;
    }
    free(prefixMax);
    free(suffixMin);
    return sum;
}
