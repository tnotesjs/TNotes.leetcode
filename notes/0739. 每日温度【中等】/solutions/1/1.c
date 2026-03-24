int* dailyTemperatures(int* temperatures, int temperaturesSize, int* returnSize) {
    int* res = (int*)calloc(temperaturesSize, sizeof(int));
    int* stack = (int*)malloc(sizeof(int) * temperaturesSize);
    int top = 0;
    for (int i = 0; i < temperaturesSize; i++) {
        while (top > 0 && temperatures[i] > temperatures[stack[top - 1]]) {
            int j = stack[--top];
            res[j] = i - j;
        }
        stack[top++] = i;
    }
    free(stack);
    *returnSize = temperaturesSize;
    return res;
}
