int** queensAttacktheKing(int** queens, int queensSize, int* queensColSize, int* king, int kingSize, int* returnSize, int** returnColumnSizes) {
    int board[8][8];
    memset(board, 0, sizeof(board));
    for (int i = 0; i < queensSize; i++) board[queens[i][0]][queens[i][1]] = 1;
    int dirs[8][2] = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};
    int** res = (int**)malloc(sizeof(int*) * 8);
    *returnSize = 0;
    for (int d = 0; d < 8; d++) {
        int r = king[0] + dirs[d][0], c = king[1] + dirs[d][1];
        while (r >= 0 && r < 8 && c >= 0 && c < 8) {
            if (board[r][c]) {
                res[*returnSize] = (int*)malloc(sizeof(int) * 2);
                res[*returnSize][0] = r;
                res[*returnSize][1] = c;
                (*returnSize)++;
                break;
            }
            r += dirs[d][0];
            c += dirs[d][1];
        }
    }
    *returnColumnSizes = (int*)malloc(sizeof(int) * (*returnSize));
    for (int i = 0; i < *returnSize; i++) (*returnColumnSizes)[i] = 2;
    return res;
}
