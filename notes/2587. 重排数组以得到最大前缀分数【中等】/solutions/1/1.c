int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (y > x) - (y < x);
}

int maxScore(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    long long sum = 0;
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
        if (sum > 0) count++;
        else break;
    }
    return count;
}
