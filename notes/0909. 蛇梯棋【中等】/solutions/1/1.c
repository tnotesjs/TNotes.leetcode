void getPos(int s, int n, int* row, int* col) {
    int r = (s - 1) / n, c = (s - 1) % n;
    *row = n - 1 - r;
    *col = (r % 2 == 0) ? c : n - 1 - c;
}

int snakesAndLadders(int** board, int boardSize, int* boardColSize) {
    int n = boardSize, total = n * n;
    bool* visited = (bool*)calloc(total + 1, sizeof(bool));
    int* queue = (int*)malloc(sizeof(int) * (total + 1));
    int front = 0, back = 0;
    queue[back++] = 1; visited[1] = true;
    int steps = 0;
    while (front < back) {
        int size = back - front;
        for (int k = 0; k < size; k++) {
            int cur = queue[front++];
            if (cur == total) { free(visited); free(queue); return steps; }
            for (int i = 1; i <= 6 && cur + i <= total; i++) {
                int r, c;
                getPos(cur + i, n, &r, &c);
                int dest = board[r][c] == -1 ? cur + i : board[r][c];
                if (!visited[dest]) { visited[dest] = true; queue[back++] = dest; }
            }
        }
        steps++;
    }
    free(visited); free(queue);
    return -1;
}
