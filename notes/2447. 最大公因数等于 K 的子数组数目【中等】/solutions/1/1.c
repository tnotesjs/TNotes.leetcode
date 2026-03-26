int gcd2447(int a, int b) {
    while (b) { int t = b; b = a % b; a = t; }
    return a;
}

int subarrayGCD(int* nums, int numsSize, int k) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        int g = 0;
        for (int j = i; j < numsSize; j++) {
            g = gcd2447(g, nums[j]);
            if (g == k) count++;
            if (g < k) break;
        }
    }
    return count;
}
