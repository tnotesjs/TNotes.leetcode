int findNumbers(int* nums, int numsSize) {
    int res = 0;

    for (int i = 0; i < numsSize; i++) {
        int num = nums[i];
        int digits = 0;

        while (num > 0) {
            digits++;
            num /= 10;
        }

        if (digits % 2 == 0) {
            res++;
        }
    }

    return res;
}
