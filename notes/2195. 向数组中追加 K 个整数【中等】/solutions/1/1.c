int cmp2195(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

long long minimalKSum(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp2195);
    long long sum = (long long)k * (k + 1) / 2;
    long long top = k;
    int prev = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == prev) continue;
        prev = nums[i];
        if (nums[i] <= top) {
            top++;
            sum += top - nums[i];
        }
    }
    return sum;
}
