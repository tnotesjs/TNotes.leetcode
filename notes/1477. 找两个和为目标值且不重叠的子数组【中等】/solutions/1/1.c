#define MIN(a,b) ((a)<(b)?(a):(b))

int minSumOfLengths(int* arr, int arrSize, int target) {
    int n = arrSize;
    int* best = (int*)malloc(n * sizeof(int));
    int res = n + 1;
    int sum = 0, left = 0;
    for (int i = 0; i < n; i++) best[i] = n + 1;
    for (int right = 0; right < n; right++) {
        sum += arr[right];
        while (sum > target) sum -= arr[left++];
        if (sum == target) {
            int len = right - left + 1;
            if (left > 0 && best[left - 1] <= n)
                res = MIN(res, len + best[left - 1]);
            best[right] = MIN(right > 0 ? best[right - 1] : n + 1, len);
        } else {
            best[right] = right > 0 ? best[right - 1] : n + 1;
        }
    }
    free(best);
    return res > n ? -1 : res;
}
