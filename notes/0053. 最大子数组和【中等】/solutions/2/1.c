int helper(int* nums, int left, int right) {
    // base case：只有一个元素
    if (left == right)
        return nums[left];

    int mid = (left + right) / 2;

    // 情况一：最大子数组在左半部分
    int leftMax = helper(nums, left, mid);

    // 情况二：最大子数组在右半部分
    int rightMax = helper(nums, mid + 1, right);

    // 情况三：最大子数组跨越中点
    // <- 从中点向左扩展，求最大和
    int leftSum = -1000000000;
    int sum = 0;
    for (int i = mid; i >= left; i--) {
        sum += nums[i];
        if (sum > leftSum)
            leftSum = sum;
    }

    // -> 从中点右边向右扩展，求最大和
    int rightSum = -1000000000;
    sum = 0;
    for (int i = mid + 1; i <= right; i++) {
        sum += nums[i];
        if (sum > rightSum)
            rightSum = sum;
    }

    int crossMax = leftSum + rightSum;

    // 三种情况取最大值
    int max = leftMax;
    if (rightMax > max)
        max = rightMax;
    if (crossMax > max)
        max = crossMax;
    return max;
}

int maxSubArray(int* nums, int numsSize) {
    return helper(nums, 0, numsSize - 1);
}
