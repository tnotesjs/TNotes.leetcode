int minimumSum(int* nums, int numsSize) {
    int n = numsSize;
    int* rightMin = (int*)malloc(n * sizeof(int));
    rightMin[n - 1] = nums[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        rightMin[i] = nums[i] < rightMin[i + 1] ? nums[i] : rightMin[i + 1];
    }

    long long res = -1;
    int leftMin = nums[0];
    for (int j = 1; j < n - 1; j++) {
        if (leftMin < nums[j] && rightMin[j + 1] < nums[j]) {
            long long sum = (long long)leftMin + nums[j] + rightMin[j + 1];
            if (res == -1 || sum < res) res = sum;
        }
        if (nums[j] < leftMin) leftMin = nums[j];
    }

    free(rightMin);
    return (int)res;
}
