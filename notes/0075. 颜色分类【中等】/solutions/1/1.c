void sortColors(int* nums, int numsSize) {
    int p0 = 0, p2 = numsSize - 1, i = 0;

    while (i <= p2) {
        if (nums[i] == 0) {
            int tmp = nums[i];
            nums[i] = nums[p0];
            nums[p0] = tmp;
            p0++;
            i++;
        } else if (nums[i] == 2) {
            int tmp = nums[i];
            nums[i] = nums[p2];
            nums[p2] = tmp;
            p2--;
        } else {
            i++;
        }
    }
}
