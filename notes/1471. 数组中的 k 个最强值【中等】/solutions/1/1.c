int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int* getStrongest(int* arr, int arrSize, int k, int* returnSize) {
    qsort(arr, arrSize, sizeof(int), cmpInt);
    int m = arr[(arrSize - 1) / 2];
    int* res = (int*)malloc(k * sizeof(int));
    int left = 0, right = arrSize - 1, cnt = 0;
    while (cnt < k) {
        if (abs(arr[right] - m) >= abs(arr[left] - m))
            res[cnt++] = arr[right--];
        else
            res[cnt++] = arr[left++];
    }
    *returnSize = k;
    return res;
}
