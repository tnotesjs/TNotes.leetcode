int target;

bool backtrack(int* nums, int numsSize, int* buckets, int k, int idx) {
    if (idx == numsSize) return true;
    for (int i = 0; i < k; i++) {
        if (buckets[i] + nums[idx] > target) continue;
        // 剪枝：跳过相同值的桶
        int skip = 0;
        for (int j = 0; j < i; j++) {
            if (buckets[j] == buckets[i]) { skip = 1; break; }
        }
        if (skip) continue;
        buckets[i] += nums[idx];
        if (backtrack(nums, numsSize, buckets, k, idx + 1)) return true;
        buckets[i] -= nums[idx];
    }
    return false;
}

int cmpDesc(const void* a, const void* b) { return *(int*)b - *(int*)a; }

bool canPartitionKSubsets(int* nums, int numsSize, int k) {
    int sum = 0;
    for (int i = 0; i < numsSize; i++) sum += nums[i];
    if (sum % k != 0) return false;
    target = sum / k;
    qsort(nums, numsSize, sizeof(int), cmpDesc);
    if (nums[0] > target) return false;
    int* buckets = (int*)calloc(k, sizeof(int));
    bool res = backtrack(nums, numsSize, buckets, k, 0);
    free(buckets);
    return res;
}
