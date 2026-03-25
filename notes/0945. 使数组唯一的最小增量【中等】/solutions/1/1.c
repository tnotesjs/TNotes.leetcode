int cmpInt(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int minIncrementForUnique(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmpInt);
    int moves = 0;

    for (int i = 1; i < numsSize; i++) {
        if (nums[i] <= nums[i - 1]) {
            int target = nums[i - 1] + 1;
            moves += target - nums[i];
            nums[i] = target;
        }
    }

    return moves;
}
