int maxProduct(int* nums, int numsSize) {
    int maxProd = nums[0], curMax = nums[0], curMin = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < 0) {
            int tmp = curMax;
            curMax = curMin;
            curMin = tmp;
        }
        curMax = nums[i] > curMax * nums[i] ? nums[i] : curMax * nums[i];
        curMin = nums[i] < curMin * nums[i] ? nums[i] : curMin * nums[i];
        if (curMax > maxProd) maxProd = curMax;
    }
    return maxProd;
}
