bool canReach(int* arr, int arrSize, int start) {
    bool* visited = calloc(arrSize, sizeof(bool));
    int* queue = malloc(sizeof(int) * arrSize);
    int front = 0, back = 0;
    queue[back++] = start;
    visited[start] = true;
    while (front < back) {
        int i = queue[front++];
        if (arr[i] == 0) {
            free(visited);
            free(queue);
            return true;
        }
        int nexts[2] = {i + arr[i], i - arr[i]};
        for (int k = 0; k < 2; k++) {
            int next = nexts[k];
            if (next >= 0 && next < arrSize && !visited[next]) {
                visited[next] = true;
                queue[back++] = next;
            }
        }
    }
    free(visited);
    free(queue);
    return false;
}
