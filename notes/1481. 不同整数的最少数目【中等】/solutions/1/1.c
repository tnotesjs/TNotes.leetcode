int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int findLeastNumOfUniqueInts(int* arr, int arrSize, int k) {
    qsort(arr, arrSize, sizeof(int), cmpInt);
    // 统计频率
    int* freq = (int*)malloc(arrSize * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < arrSize;) {
        int j = i;
        while (j < arrSize && arr[j] == arr[i]) j++;
        freq[cnt++] = j - i;
        i = j;
    }
    qsort(freq, cnt, sizeof(int), cmpInt);
    int removed = 0;
    for (int i = 0; i < cnt; i++) {
        if (k >= freq[i]) { k -= freq[i]; removed++; }
        else break;
    }
    free(freq);
    return cnt - removed;
}
