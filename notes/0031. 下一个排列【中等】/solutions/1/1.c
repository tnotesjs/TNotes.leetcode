void nextPermutation(int* nums, int numsSize) {
    int i = numsSize - 2;

    // 步骤 1：从右向左找到第一个下降位 nums[i] < nums[i+1]
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    if (i >= 0) {
        // 步骤 2：在 i 右侧找到最小的比 nums[i] 大的数 nums[j]
        int j = numsSize - 1;
        while (nums[j] <= nums[i]) j--;
        // 步骤 3：交换
        int tmp = nums[i]; nums[i] = nums[j]; nums[j] = tmp;
    }

    // 步骤 4：将 i+1 右侧的降序序列翻转为升序
    int left = i + 1, right = numsSize - 1;
    while (left < right) {
        int tmp = nums[left]; nums[left] = nums[right]; nums[right] = tmp;
        left++; right--;
    }
}
