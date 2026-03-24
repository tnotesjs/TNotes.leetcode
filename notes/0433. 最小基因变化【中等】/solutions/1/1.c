int minMutation(char* startGene, char* endGene, char** bank, int bankSize) {
    bool inBank[bankSize];
    memset(inBank, true, sizeof(inBank));
    // BFS
    char queue[bankSize + 1][9];
    int steps[bankSize + 1];
    int front = 0, rear = 0;
    strcpy(queue[rear], startGene); steps[rear++] = 0;
    bool visited[bankSize];
    memset(visited, false, sizeof(visited));
    while (front < rear) {
        char* gene = queue[front];
        int step = steps[front++];
        for (int i = 0; i < bankSize; i++) {
            if (visited[i]) continue;
            int diff = 0;
            for (int j = 0; j < 8; j++) if (gene[j] != bank[i][j]) diff++;
            if (diff == 1) {
                if (strcmp(bank[i], endGene) == 0) return step + 1;
                visited[i] = true;
                strcpy(queue[rear], bank[i]); steps[rear++] = step + 1;
            }
        }
    }
    return -1;
}
