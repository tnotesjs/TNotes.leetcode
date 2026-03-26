int *g_r1, *g_r2;
int cmp(const void *a, const void *b) {
    int ia = *(int *)a, ib = *(int *)b;
    return (g_r1[ib] - g_r2[ib]) - (g_r1[ia] - g_r2[ia]);
}

int miceAndCheese(int *reward1, int reward1Size, int *reward2, int reward2Size, int k) {
    int n = reward1Size;
    g_r1 = reward1; g_r2 = reward2;
    int *ids = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) ids[i] = i;
    qsort(ids, n, sizeof(int), cmp);
    int ans = 0;
    for (int i = 0; i < n; i++) {
        ans += i < k ? reward1[ids[i]] : reward2[ids[i]];
    }
    free(ids);
    return ans;
}
