int cmp(const void *a, const void *b) {
    int x = *(int *)a, y = *(int *)b;
    return (x > y) - (x < y);
}

int minOperations(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int ans = 0, i = 0;
    while (i < numsSize) {
        int j = i;
        while (j < numsSize && nums[j] == nums[i]) j++;
        int freq = j - i;
        if (freq == 1) return -1;
        ans += (freq + 2) / 3;
        i = j;
    }
    return ans;
}
