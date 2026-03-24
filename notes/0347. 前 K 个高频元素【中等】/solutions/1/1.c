int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {
    // 哈希表计数（简化版：先排序再统计）
    int* sorted = (int*)malloc(sizeof(int) * numsSize);
    memcpy(sorted, nums, sizeof(int) * numsSize);
    qsort(sorted, numsSize, sizeof(int), (int(*)(const void*, const void*))strcmp);
    // 统计频率
    int unique = 0, cap = numsSize;
    int* vals = (int*)malloc(sizeof(int) * cap);
    int* freqs = (int*)malloc(sizeof(int) * cap);
    for (int i = 0; i < numsSize; ) {
        int j = i;
        while (j < numsSize && sorted[j] == sorted[i]) j++;
        vals[unique] = sorted[i];
        freqs[unique] = j - i;
        unique++;
        i = j;
    }
    // 桶排序
    int** buckets = (int**)calloc(numsSize + 1, sizeof(int*));
    int* bSizes = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < unique; i++) {
        int f = freqs[i];
        if (!buckets[f]) buckets[f] = (int*)malloc(sizeof(int) * unique);
        buckets[f][bSizes[f]++] = vals[i];
    }
    int* res = (int*)malloc(sizeof(int) * k);
    *returnSize = 0;
    for (int i = numsSize; i >= 0 && *returnSize < k; i--) {
        for (int j = 0; j < bSizes[i] && *returnSize < k; j++)
            res[(*returnSize)++] = buckets[i][j];
    }
    free(sorted); free(vals); free(freqs);
    for (int i = 0; i <= numsSize; i++) if (buckets[i]) free(buckets[i]);
    free(buckets); free(bSizes);
    return res;
}
