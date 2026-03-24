int* exclusiveTime(int n, char** logs, int logsSize, int* returnSize) {
    int* res = (int*)calloc(n, sizeof(int));
    int* stack = (int*)malloc(sizeof(int) * logsSize);
    int top = -1, prev = 0;
    for (int i = 0; i < logsSize; i++) {
        int id, time;
        char type[6];
        sscanf(logs[i], "%d:%[^:]:%d", &id, type, &time);
        if (type[0] == 's') {
            if (top >= 0) res[stack[top]] += time - prev;
            stack[++top] = id;
            prev = time;
        } else {
            res[stack[top--]] += time - prev + 1;
            prev = time + 1;
        }
    }
    free(stack);
    *returnSize = n;
    return res;
}
