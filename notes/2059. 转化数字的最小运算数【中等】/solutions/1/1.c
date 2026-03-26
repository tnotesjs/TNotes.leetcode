int minimumOperations(int* nums, int numsSize, int start, int goal) {
    bool visited[1001];
    memset(visited, false, sizeof(visited));
    int* queue = (int*)malloc(1001 * sizeof(int));
    int front = 0, rear = 0;
    queue[rear++] = start;
    visited[start] = true;
    int steps = 0;
    while (front < rear) {
        int size = rear - front;
        steps++;
        for (int i = 0; i < size; i++) {
            int x = queue[front++];
            for (int j = 0; j < numsSize; j++) {
                int ops[3] = {x + nums[j], x - nums[j], x ^ nums[j]};
                for (int k = 0; k < 3; k++) {
                    int next = ops[k];
                    if (next == goal) { free(queue); return steps; }
                    if (next >= 0 && next <= 1000 && !visited[next]) {
                        visited[next] = true;
                        queue[rear++] = next;
                    }
                }
            }
        }
    }
    free(queue);
    return -1;
}
