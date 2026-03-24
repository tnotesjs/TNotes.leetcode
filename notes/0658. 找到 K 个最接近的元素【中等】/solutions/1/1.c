int* findClosestElements(int* arr, int arrSize, int k, int x, int* returnSize) {
    int lo = 0, hi = arrSize - k;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (x - arr[mid] > arr[mid + k] - x) lo = mid + 1;
        else hi = mid;
    }
    int* res = (int*)malloc(sizeof(int) * k);
    for (int i = 0; i < k; i++) res[i] = arr[lo + i];
    *returnSize = k;
    return res;
}
