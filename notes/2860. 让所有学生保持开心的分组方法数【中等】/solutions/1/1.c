int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int countWays(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmpInt);
    int ans = (nums[0] > 0 ? 1 : 0) + 1;
    for (int s = 1; s < numsSize; s++)
        if (nums[s - 1] < s && nums[s] > s) ans++;
    return ans;
}
