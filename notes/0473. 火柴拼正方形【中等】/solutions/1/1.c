int cmpDesc(const void* a, const void* b) { return *(int*)b - *(int*)a; }

bool dfs(int* matchsticks, int n, int* sides, int side, int idx) {
    if (idx == n) return sides[0] == side && sides[1] == side && sides[2] == side;
    for (int i = 0; i < 4; i++) {
        if (sides[i] + matchsticks[idx] > side) continue;
        if (i > 0 && sides[i] == sides[i - 1]) continue;
        sides[i] += matchsticks[idx];
        if (dfs(matchsticks, n, sides, side, idx + 1)) return true;
        sides[i] -= matchsticks[idx];
    }
    return false;
}

bool makesquare(int* matchsticks, int matchsticksSize) {
    int sum = 0;
    for (int i = 0; i < matchsticksSize; i++) sum += matchsticks[i];
    if (sum % 4 != 0) return false;
    qsort(matchsticks, matchsticksSize, sizeof(int), cmpDesc);
    int sides[4] = {0};
    return dfs(matchsticks, matchsticksSize, sides, sum / 4, 0);
}
