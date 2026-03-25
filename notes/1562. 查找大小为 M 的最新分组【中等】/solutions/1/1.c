int findLatestStep(int* arr, int arrSize, int m) {
    int n = arrSize;
    if (m == n) return n;
    int* len = (int*)calloc(n + 2, sizeof(int));
    int res = -1;
    for (int step = 0; step < n; step++) {
        int pos = arr[step];
        int leftLen = len[pos - 1];
        int rightLen = len[pos + 1];
        int newLen = leftLen + rightLen + 1;
        len[pos - leftLen] = newLen;
        len[pos + rightLen] = newLen;
        if (leftLen == m || rightLen == m) res = step;
    }
    free(len);
    return res;
}
