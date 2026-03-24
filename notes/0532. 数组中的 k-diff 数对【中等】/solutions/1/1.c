int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int findPairs(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        // 二分查找 nums[i]+k
        int lo = i + 1, hi = numsSize - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (nums[mid] == nums[i] + k) { count++; break; }
            else if (nums[mid] < nums[i] + k) lo = mid + 1;
            else hi = mid - 1;
        }
    }
    return count;
}
