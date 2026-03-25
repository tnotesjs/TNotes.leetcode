int cmpDesc(const void* a, const void* b) {
    return *(int*)b - *(int*)a;
}

int minSetSize(int* arr, int arrSize) {
    int freq[100001] = {0};
    for (int i = 0; i < arrSize; i++) freq[arr[i]]++;
    int counts[100001], cnt = 0;
    for (int i = 1; i <= 100000; i++)
        if (freq[i] > 0) counts[cnt++] = freq[i];
    qsort(counts, cnt, sizeof(int), cmpDesc);
    int removed = 0, half = arrSize / 2;
    for (int i = 0; i < cnt; i++) {
        removed += counts[i];
        if (removed >= half) return i + 1;
    }
    return cnt;
}
