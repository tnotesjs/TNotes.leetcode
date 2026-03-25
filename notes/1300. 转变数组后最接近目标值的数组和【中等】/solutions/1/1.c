int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int findBestValue(int* arr, int arrSize, int target) {
    qsort(arr, arrSize, sizeof(int), cmp);
    int* prefix = calloc(arrSize + 1, sizeof(int));
    for (int i = 0; i < arrSize; i++) prefix[i + 1] = prefix[i] + arr[i];
    int ans = 0, minDiff = target;
    for (int value = 0; value <= arr[arrSize - 1]; value++) {
        int lo = 0, hi = arrSize;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (arr[mid] < value) lo = mid + 1;
            else hi = mid;
        }
        int sum = prefix[lo] + (arrSize - lo) * value;
        int diff = abs(sum - target);
        if (diff < minDiff) {
            minDiff = diff;
            ans = value;
        }
    }
    free(prefix);
    return ans;
}
