int minCost, surN, defN;
int surR[9], surC[9], defR[9], defC[9], used[9];

void dfs(int idx, int cost) {
    if (idx == surN) { if (cost < minCost) minCost = cost; return; }
    for (int j = 0; j < defN; j++) {
        if (!used[j]) {
            int c = cost + abs(surR[idx] - defR[j]) + abs(surC[idx] - defC[j]);
            if (c < minCost) { used[j] = 1; dfs(idx + 1, c); used[j] = 0; }
        }
    }
}

int minimumMoves(int** grid, int gridSize, int* gridColSize) {
    surN = 0; defN = 0;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) {
            if (grid[i][j] > 1)
                for (int k = 1; k < grid[i][j]; k++) { surR[surN] = i; surC[surN] = j; surN++; }
            else if (grid[i][j] == 0) { defR[defN] = i; defC[defN] = j; defN++; }
        }
    if (defN == 0) return 0;
    minCost = 1000000;
    memset(used, 0, sizeof(used));
    dfs(0, 0);
    return minCost;
}
