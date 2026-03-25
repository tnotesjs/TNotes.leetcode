int maximumSum(int* arr, int arrSize) {
    int noDelete = arr[0];
    int withDelete = -100000000;
    int ans = arr[0];
    for (int i = 1; i < arrSize; i++) {
        withDelete = noDelete > withDelete + arr[i] ? noDelete : withDelete + arr[i];
        noDelete = arr[i] > noDelete + arr[i] ? arr[i] : noDelete + arr[i];
        if (noDelete > ans) ans = noDelete;
        if (withDelete > ans) ans = withDelete;
    }
    return ans;
}
