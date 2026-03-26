int cmp2225(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int** findWinners(int** matches, int matchesSize, int* matchesColSize,
                  int* returnSize, int** returnColumnSizes) {
    int maxPlayer = 0;
    for (int i = 0; i < matchesSize; i++) {
        if (matches[i][0] > maxPlayer) maxPlayer = matches[i][0];
        if (matches[i][1] > maxPlayer) maxPlayer = matches[i][1];
    }
    int *losses = (int *)malloc((maxPlayer + 1) * sizeof(int));
    memset(losses, -1, (maxPlayer + 1) * sizeof(int));
    for (int i = 0; i < matchesSize; i++) {
        if (losses[matches[i][0]] == -1) losses[matches[i][0]] = 0;
        if (losses[matches[i][1]] == -1) losses[matches[i][1]] = 0;
        losses[matches[i][1]]++;
    }
    int *noLoss = (int *)malloc((maxPlayer + 1) * sizeof(int));
    int *oneLoss = (int *)malloc((maxPlayer + 1) * sizeof(int));
    int n0 = 0, n1 = 0;
    for (int i = 0; i <= maxPlayer; i++) {
        if (losses[i] == 0) noLoss[n0++] = i;
        else if (losses[i] == 1) oneLoss[n1++] = i;
    }
    *returnSize = 2;
    int **res = (int **)malloc(2 * sizeof(int *));
    *returnColumnSizes = (int *)malloc(2 * sizeof(int));
    res[0] = (int *)malloc(n0 * sizeof(int));
    res[1] = (int *)malloc(n1 * sizeof(int));
    memcpy(res[0], noLoss, n0 * sizeof(int));
    memcpy(res[1], oneLoss, n1 * sizeof(int));
    (*returnColumnSizes)[0] = n0;
    (*returnColumnSizes)[1] = n1;
    free(losses); free(noLoss); free(oneLoss);
    return res;
}
