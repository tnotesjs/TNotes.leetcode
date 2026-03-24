int maxChunksToSorted(int* arr, int arrSize) {
    int res = 0, mx = 0;
    for (int i = 0; i < arrSize; i++) {
        if (arr[i] > mx) mx = arr[i];
        if (mx == i) res++;
    }
    return res;
}
