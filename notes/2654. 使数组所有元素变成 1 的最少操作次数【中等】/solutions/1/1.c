int gcd(int a, int b) {
    while (b) { int t = b; b = a % b; a = t; }
    return a;
}

int minOperations(int* nums, int numsSize) {
    int ones = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 1) ones++;
    }
    if (ones > 0) return numsSize - ones;

    int minLen = numsSize + 1;
    for (int i = 0; i < numsSize; i++) {
        int g = 0;
        for (int j = i; j < numsSize; j++) {
            g = gcd(g, nums[j]);
            if (g == 1) {
                if (j - i + 1 < minLen) minLen = j - i + 1;
                break;
            }
        }
    }
    return minLen > numsSize ? -1 : (minLen - 1) + (numsSize - 1);
}
