int findPeakElement(int* nums, int numsSize) {
    int l = 0, r = numsSize - 1;

    while (l < r) {
        int mid = ((r - l) >> 1) + l;
        if (nums[mid] > nums[mid + 1])
            r = mid;
        else
            l = mid + 1;
    }

    return l;
}
