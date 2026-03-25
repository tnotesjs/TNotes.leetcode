int sumFourDivisors(int* nums, int numsSize) {
    int res = 0;
    for (int k = 0; k < numsSize; k++) {
        int num = nums[k], count = 0, sum = 0;
        for (int i = 1; (long long)i * i <= num; i++) {
            if (num % i == 0) {
                count++;
                sum += i;
                if (i != num / i) {
                    count++;
                    sum += num / i;
                }
            }
            if (count > 4) break;
        }
        if (count == 4) res += sum;
    }
    return res;
}
