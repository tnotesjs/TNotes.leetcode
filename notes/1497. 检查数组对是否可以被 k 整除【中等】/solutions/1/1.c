bool canArrange(int* arr, int arrSize, int k) {
    int* cnt = (int*)calloc(k, sizeof(int));
    for (int i = 0; i < arrSize; i++)
        cnt[((arr[i] % k) + k) % k]++;
    if (cnt[0] % 2 != 0) { free(cnt); return false; }
    for (int i = 1; i <= k / 2; i++) {
        if (cnt[i] != cnt[k - i]) { free(cnt); return false; }
    }
    free(cnt);
    return true;
}
