typedef struct { int a, b; } Pair;
typedef struct { int x, y, idx; } Query;

int cmpPair(const void* a, const void* b) {
    return ((Pair*)b)->a - ((Pair*)a)->a;
}

int cmpQuery(const void* a, const void* b) {
    return ((Query*)b)->x - ((Query*)a)->x;
}

int* maximumSumQueries(int* nums1, int nums1Size, int* nums2, int nums2Size, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int n = nums1Size;
    Pair* pairs = (Pair*)malloc(n * sizeof(Pair));
    for (int i = 0; i < n; i++) { pairs[i].a = nums1[i]; pairs[i].b = nums2[i]; }
    qsort(pairs, n, sizeof(Pair), cmpPair);

    Query* qs = (Query*)malloc(queriesSize * sizeof(Query));
    for (int i = 0; i < queriesSize; i++) { qs[i].x = queries[i][0]; qs[i].y = queries[i][1]; qs[i].idx = i; }
    qsort(qs, queriesSize, sizeof(Query), cmpQuery);

    int* ans = (int*)malloc(queriesSize * sizeof(int));
    int* stB = (int*)malloc(n * sizeof(int));
    int* stS = (int*)malloc(n * sizeof(int));
    int top = 0, j = 0;

    for (int i = 0; i < queriesSize; i++) {
        while (j < n && pairs[j].a >= qs[i].x) {
            int b = pairs[j].b, s = pairs[j].a + pairs[j].b;
            while (top > 0 && stS[top - 1] <= s) top--;
            if (top == 0 || stB[top - 1] < b) { stB[top] = b; stS[top] = s; top++; }
            j++;
        }
        int y = qs[i].y, lo = 0, hi = top - 1, res = -1;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (stB[mid] >= y) { res = stS[mid]; hi = mid - 1; }
            else lo = mid + 1;
        }
        ans[qs[i].idx] = res;
    }
    free(pairs); free(qs); free(stB); free(stS);
    *returnSize = queriesSize;
    return ans;
}
