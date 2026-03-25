int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int* numMovesStonesII(int* stones, int stonesSize, int* returnSize) {
    qsort(stones, stonesSize, sizeof(int), cmp);
    int n = stonesSize;
    int maxMoves = stones[n-1] - stones[1] - (n-2);
    int t = stones[n-2] - stones[0] - (n-2);
    if (t > maxMoves) maxMoves = t;

    int minMoves = n;
    int j = 0;
    for (int i = 0; i < n; i++) {
        while (j + 1 < n && stones[j + 1] - stones[i] + 1 <= n) j++;
        int already = j - i + 1;
        int moves;
        if (already == n - 1 && stones[j] - stones[i] + 1 == n - 1)
            moves = 2;
        else
            moves = n - already;
        if (moves < minMoves) minMoves = moves;
    }
    int* res = malloc(2 * sizeof(int));
    res[0] = minMoves; res[1] = maxMoves;
    *returnSize = 2;
    return res;
}
