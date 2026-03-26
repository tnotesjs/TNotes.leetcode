long long countSubarrays(int* nums, int numsSize, int k) {
    int mx = 0;
    for (int i = 0; i < numsSize; i++)
        if (nums[i] > mx) mx = nums[i];
    long long ans = 0;
    int cnt = 0, left = 0;
    for (int right = 0; right < numsSize; right++) {
        if (nums[right] == mx) cnt++;
        while (cnt >= k) {
            if (nums[left] == mx) cnt--;
            left++;
        }
        ans += left;
    }
    return ans;
}
