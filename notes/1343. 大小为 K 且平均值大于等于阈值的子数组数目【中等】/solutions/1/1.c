int numOfSubarrays(int* arr, int arrSize, int k, int threshold) {
    int target = k * threshold;
    int sum = 0, count = 0;
    for (int i = 0; i < arrSize; i++) {
        sum += arr[i];
        if (i >= k) sum -= arr[i - k];
        if (i >= k - 1 && sum >= target) count++;
    }
    return count;
}
