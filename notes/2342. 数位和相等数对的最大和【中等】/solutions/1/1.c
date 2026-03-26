int digitSum2342(int n) {
    int s = 0;
    while (n > 0) { s += n % 10; n /= 10; }
    return s;
}

int maximumSum(int* nums, int numsSize) {
    int best[82]; // 数位和最大为 9*9=81
    memset(best, -1, sizeof(best));
    int res = -1;
    for (int i = 0; i < numsSize; i++) {
        int s = digitSum2342(nums[i]);
        if (best[s] >= 0) {
            int sum = best[s] + nums[i];
            if (sum > res) res = sum;
            if (nums[i] > best[s]) best[s] = nums[i];
        } else {
            best[s] = nums[i];
        }
    }
    return res;
}
