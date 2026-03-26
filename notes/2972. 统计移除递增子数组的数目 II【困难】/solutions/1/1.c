long long incremovableSubarrayCount(int* nums, int numsSize) {
    int n = numsSize;
    int i = 0;
    while (i + 1 < n && nums[i] < nums[i + 1]) i++;
    if (i == n - 1) return (long long)n * (n + 1) / 2;
    int j = n - 1;
    while (j > 0 && nums[j - 1] < nums[j]) j--;
    long long ans = n - j + 1;
    int r = j;
    for (int l = 0; l <= i; l++) {
        while (r < n && nums[r] <= nums[l]) r++;
        ans += n - r + 1;
    }
    return ans;
}
