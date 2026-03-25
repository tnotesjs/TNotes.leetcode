int cmpAsc(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int* nums2Ref;
int cmpDesc(const void* a, const void* b) { return nums2Ref[*(int*)b] - nums2Ref[*(int*)a]; }

int* advantageCount(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    int n = nums1Size;
    qsort(nums1, n, sizeof(int), cmpAsc);
    int* idx = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++) idx[i] = i;
    nums2Ref = nums2;
    qsort(idx, n, sizeof(int), cmpDesc);
    int* res = (int*)malloc(sizeof(int) * n);
    int lo = 0, hi = n - 1;
    for (int k = 0; k < n; k++) {
        int i = idx[k];
        if (nums1[hi] > nums2[i]) res[i] = nums1[hi--];
        else res[i] = nums1[lo++];
    }
    free(idx);
    *returnSize = n;
    return res;
}
