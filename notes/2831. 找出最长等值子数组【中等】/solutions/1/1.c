int longestEqualSubarray(int* nums, int numsSize, int k) {
    int** groups = (int**)calloc(numsSize + 1, sizeof(int*));
    int* gsize = (int*)calloc(numsSize + 1, sizeof(int));
    int* gcap = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        int v = nums[i];
        if (gsize[v] == gcap[v]) {
            gcap[v] = gcap[v] ? gcap[v] * 2 : 4;
            groups[v] = (int*)realloc(groups[v], gcap[v] * sizeof(int));
        }
        groups[v][gsize[v]++] = i;
    }
    int ans = 0;
    for (int v = 1; v <= numsSize; v++) {
        if (!gsize[v]) continue;
        int l = 0;
        for (int r = 0; r < gsize[v]; r++) {
            while (groups[v][r] - groups[v][l] + 1 - (r - l + 1) > k) l++;
            int len = r - l + 1;
            if (len > ans) ans = len;
        }
        free(groups[v]);
    }
    free(groups); free(gsize); free(gcap);
    return ans;
}
