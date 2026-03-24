void swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }

int quickSelect(int* nums, int lo, int hi, int target) {
    int pivot = nums[hi], i = lo;
    for (int j = lo; j < hi; j++) {
        if (nums[j] <= pivot) swap(&nums[i++], &nums[j]);
    }
    swap(&nums[i], &nums[hi]);
    if (i == target) return nums[i];
    if (i < target) return quickSelect(nums, i + 1, hi, target);
    return quickSelect(nums, lo, i - 1, target);
}

int findKthLargest(int* nums, int numsSize, int k) {
    return quickSelect(nums, 0, numsSize - 1, numsSize - k);
}
