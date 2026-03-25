int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

bool isPossibleDivide(int* nums, int numsSize, int k) {
    if (numsSize % k != 0) return false;
    qsort(nums, numsSize, sizeof(int), cmp);
    // 用数组模拟计数器
    int* counts = calloc(numsSize, sizeof(int));
    int* vals = malloc(sizeof(int) * numsSize);
    int uniqueSize = 0;
    for (int i = 0; i < numsSize; i++) {
        if (uniqueSize == 0 || vals[uniqueSize - 1] != nums[i]) {
            vals[uniqueSize] = nums[i];
            counts[uniqueSize] = 1;
            uniqueSize++;
        } else {
            counts[uniqueSize - 1]++;
        }
    }
    for (int i = 0; i < uniqueSize; i++) {
        if (counts[i] > 0) {
            int c = counts[i];
            for (int j = 0; j < k; j++) {
                int target = vals[i] + j;
                // 找到 target 在 vals 中的位置
                int idx = i + j;
                if (idx >= uniqueSize || vals[idx] != target || counts[idx] < c) {
                    free(counts);
                    free(vals);
                    return false;
                }
                counts[idx] -= c;
            }
        }
    }
    free(counts);
    free(vals);
    return true;
}
