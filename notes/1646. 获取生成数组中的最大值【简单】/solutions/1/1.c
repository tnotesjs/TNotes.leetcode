int getMaximumGenerated(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    int nums[101] = {0};
    nums[1] = 1;
    int ans = 1;

    for (int i = 1; 2 * i <= n; i++) {
        int even = 2 * i;
        int odd = 2 * i + 1;
        nums[even] = nums[i];
        if (nums[even] > ans) ans = nums[even];
        if (odd <= n) {
            nums[odd] = nums[i] + nums[i + 1];
            if (nums[odd] > ans) ans = nums[odd];
        }
    }

    return ans;
}
