int cmp3002(const void* a, const void* b) {
    return (*(int*)a > *(int*)b) - (*(int*)a < *(int*)b);
}

int maximumSetSize(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int n = nums1Size;
    int half = n / 2;
    qsort(nums1, n, sizeof(int), cmp3002);
    qsort(nums2, n, sizeof(int), cmp3002);
    // 统计各自去重后的大小
    int uniq1 = 0, uniq2 = 0;
    for (int i = 0; i < n; i++)
        if (i == 0 || nums1[i] != nums1[i - 1]) uniq1++;
    for (int i = 0; i < n; i++)
        if (i == 0 || nums2[i] != nums2[i - 1]) uniq2++;
    // 双指针统计公共元素数
    int common = 0, i = 0, j = 0;
    while (i < n && j < n) {
        while (i > 0 && i < n && nums1[i] == nums1[i - 1]) i++;
        while (j > 0 && j < n && nums2[j] == nums2[j - 1]) j++;
        if (i >= n || j >= n) break;
        if (nums1[i] == nums2[j]) { common++; i++; j++; }
        else if (nums1[i] < nums2[j]) i++;
        else j++;
    }
    int only1 = uniq1 - common;
    int only2 = uniq2 - common;
    int take1 = only1 < half ? only1 : half;
    int take2 = only2 < half ? only2 : half;
    int rem = (half - take1) + (half - take2);
    int takeCommon = common < rem ? common : rem;
    return take1 + take2 + takeCommon;
}
