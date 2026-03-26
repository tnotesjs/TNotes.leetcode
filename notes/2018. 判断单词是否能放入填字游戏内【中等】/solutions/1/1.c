bool placeWordInCrossword(char** board, int boardSize, int* boardColSize, char* word) {
    int m = boardSize, n = boardColSize[0], k = strlen(word);
    // 横向检查
    for (int i = 0; i < m; i++) {
        int j = 0;
        while (j < n) {
            int start = j;
            while (j < n && board[i][j] != '#') j++;
            if (j - start == k) {
                bool ok = true;
                for (int x = 0; x < k && ok; x++)
                    if (board[i][start + x] != ' ' && board[i][start + x] != word[x]) ok = false;
                if (ok) return true;
                ok = true;
                for (int x = 0; x < k && ok; x++)
                    if (board[i][start + x] != ' ' && board[i][start + x] != word[k - 1 - x]) ok = false;
                if (ok) return true;
            }
            j++;
        }
    }
    // 纵向检查
    for (int j = 0; j < n; j++) {
        int i = 0;
        while (i < m) {
            int start = i;
            while (i < m && board[i][j] != '#') i++;
            if (i - start == k) {
                bool ok = true;
                for (int x = 0; x < k && ok; x++)
                    if (board[start + x][j] != ' ' && board[start + x][j] != word[x]) ok = false;
                if (ok) return true;
                ok = true;
                for (int x = 0; x < k && ok; x++)
                    if (board[start + x][j] != ' ' && board[start + x][j] != word[k - 1 - x]) ok = false;
                if (ok) return true;
            }
            i++;
        }
    }
    return false;
}
