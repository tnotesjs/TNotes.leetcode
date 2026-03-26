long long gcd2470(long long a, long long b) {
    while (b) { long long t = b; b = a % b; a = t; }
    return a;
}

int subarrayLCM(int* nums, int numsSize, int k) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        long long l = 1;
        for (int j = i; j < numsSize; j++) {
            l = l / gcd2470(l, nums[j]) * nums[j];
            if (l == k) count++;
            if (l > k) break;
        }
    }
    return count;
}
