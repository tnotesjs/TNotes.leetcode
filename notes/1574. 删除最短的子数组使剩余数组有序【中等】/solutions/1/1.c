int findLengthOfShortestSubarray(int* arr, int arrSize) {
    int n = arrSize;
    int right = n - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) right--;
    if (right == 0) return 0;
    int res = right;
    for (int left = 0; left < n; left++) {
        if (left > 0 && arr[left] < arr[left - 1]) break;
        while (right < n && arr[right] < arr[left]) right++;
        int d = right - left - 1;
        if (d < res) res = d;
    }
    return res;
}
