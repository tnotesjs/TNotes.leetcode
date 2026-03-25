void merge(int* nums, int l, int m, int r, int* tmp) {
    memcpy(tmp + l, nums + l, sizeof(int) * (r - l + 1));
    int i = l, j = m + 1, k = l;
    while (i <= m && j <= r) nums[k++] = tmp[i] <= tmp[j] ? tmp[i++] : tmp[j++];
    while (i <= m) nums[k++] = tmp[i++];
    while (j <= r) nums[k++] = tmp[j++];
}

void mergeSort(int* nums, int l, int r, int* tmp) {
    if (l >= r) return;
    int m = l + (r - l) / 2;
    mergeSort(nums, l, m, tmp);
    mergeSort(nums, m + 1, r, tmp);
    merge(nums, l, m, r, tmp);
}

int* sortArray(int* nums, int numsSize, int* returnSize) {
    int* tmp = (int*)malloc(sizeof(int) * numsSize);
    mergeSort(nums, 0, numsSize - 1, tmp);
    free(tmp);
    *returnSize = numsSize;
    return nums;
}
