int reverse2442(int x) {
    int r = 0;
    while (x) {
        r = r * 10 + x % 10;
        x /= 10;
    }
    return r;
}

int cmp2442(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int countDistinctIntegers(int* nums, int numsSize) {
    int *arr = (int *)malloc(numsSize * 2 * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        arr[i] = nums[i];
        arr[i + numsSize] = reverse2442(nums[i]);
    }
    int total = numsSize * 2;
    qsort(arr, total, sizeof(int), cmp2442);
    int cnt = 1;
    for (int i = 1; i < total; i++) {
        if (arr[i] != arr[i - 1]) cnt++;
    }
    free(arr);
    return cnt;
}
