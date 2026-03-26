long long zeroFilledSubarray(int* nums, int numsSize) {
    long long res = 0, cnt = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 0) {
            cnt++;
            res += cnt;
        } else {
            cnt = 0;
        }
    }
    return res;
}
