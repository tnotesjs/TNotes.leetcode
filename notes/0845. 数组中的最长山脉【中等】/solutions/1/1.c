int longestMountain(int* arr, int arrSize) {
    int res = 0, i = 1;
    while (i < arrSize) {
        while (i < arrSize && arr[i] <= arr[i-1]) i++;
        int up = 0;
        while (i < arrSize && arr[i] > arr[i-1]) { up++; i++; }
        int down = 0;
        while (i < arrSize && arr[i] < arr[i-1]) { down++; i++; }
        if (up > 0 && down > 0 && up + down + 1 > res) res = up + down + 1;
    }
    return res;
}
