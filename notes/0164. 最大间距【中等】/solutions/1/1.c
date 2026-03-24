int maximumGap(int* nums, int numsSize) {
    if (numsSize < 2) return 0;
    int minVal = nums[0], maxVal = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < minVal) minVal = nums[i];
        if (nums[i] > maxVal) maxVal = nums[i];
    }
    if (minVal == maxVal) return 0;
    int bucketSize = (maxVal - minVal) / (numsSize - 1);
    if (bucketSize < 1) bucketSize = 1;
    int bucketCount = (maxVal - minVal) / bucketSize + 1;
    int* bucketsMin = (int*)malloc(sizeof(int) * bucketCount);
    int* bucketsMax = (int*)malloc(sizeof(int) * bucketCount);
    for (int i = 0; i < bucketCount; i++) {
        bucketsMin[i] = INT_MAX;
        bucketsMax[i] = INT_MIN;
    }
    for (int i = 0; i < numsSize; i++) {
        int idx = (nums[i] - minVal) / bucketSize;
        if (nums[i] < bucketsMin[idx]) bucketsMin[idx] = nums[i];
        if (nums[i] > bucketsMax[idx]) bucketsMax[idx] = nums[i];
    }
    int maxGap = 0, prevMax = bucketsMax[0];
    for (int i = 1; i < bucketCount; i++) {
        if (bucketsMin[i] == INT_MAX) continue;
        int gap = bucketsMin[i] - prevMax;
        if (gap > maxGap) maxGap = gap;
        prevMax = bucketsMax[i];
    }
    free(bucketsMin);
    free(bucketsMax);
    return maxGap;
}
