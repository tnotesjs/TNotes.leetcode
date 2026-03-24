int arrayNesting(int* nums, int numsSize) {
    int res = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == -1) continue;
        int count = 0, j = i;
        while (nums[j] != -1) {
            int next = nums[j];
            nums[j] = -1;
            j = next;
            count++;
        }
        if (count > res) res = count;
    }
    return res;
}
