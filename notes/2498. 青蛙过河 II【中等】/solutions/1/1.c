int maxJump(int* stones, int stonesSize) {
    int ans = stones[1] - stones[0];
    for (int i = 2; i < stonesSize; i++) {
        int gap = stones[i] - stones[i - 2];
        if (gap > ans) ans = gap;
    }
    return ans;
}
