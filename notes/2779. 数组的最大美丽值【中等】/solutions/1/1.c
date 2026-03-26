int cmp(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int maximumBeauty(int *nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int res = 0, left = 0;
    for (int right = 0; right < numsSize; right++) {
        while (nums[right] - nums[left] > 2 * k) left++;
        if (right - left + 1 > res) res = right - left + 1;
    }
    return res;
}
