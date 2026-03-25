int peakIndexInMountainArray(int* arr, int arrSize) {
    int lo = 1, hi = arrSize - 2;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (arr[mid] < arr[mid + 1]) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}
